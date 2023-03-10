import * as THREE from 'three';
import { CSS3DRenderer } from '../../../lib/CSS3DObject';

export type LayerControllerOptions = {
  isAutoSize?: boolean;
  isAnimating?: boolean;
  containerElement?: HTMLElement;
  scene?: THREE.Scene;
  width?: number;
  height?: number;
};
export interface LayerControllerCallbackEvent extends Event {
  detail?: {
    scene?: THREE.Scene;
    time?: number;
  };
}

export type LayerControllerCallback = (e: LayerControllerCallbackEvent) => void;

export type LayerControllerEvents = 'scene-changed' | 'frame-changed';

type LayerControllerAddEventListener = (
  type: LayerControllerEvents,
  callback: LayerControllerCallback | null,
  options?: boolean | AddEventListenerOptions,
) => void;

type LayerControllerRemoveEventListener = (
  type: LayerControllerEvents,
  callback: EventListenerOrEventListenerObject | null,
  options?: boolean | EventListenerOptions,
) => void;

export class LayerControllerEventTarget extends EventTarget {
  addEventListener: LayerControllerAddEventListener = (
    type,
    callback,
    options?,
  ): void => {
    super.addEventListener(type, callback, options);
  };

  removeEventListener: LayerControllerRemoveEventListener = (
    type,
    callback,
    options?,
  ): void => {
    super.removeEventListener(type, callback, options);
  };
}

class LayerController {
  #eventTarget: LayerControllerEventTarget = new LayerControllerEventTarget();
  #containerElement: HTMLElement | undefined = undefined;
  #isStartup = false;
  #clock: THREE.Clock = new THREE.Clock();
  #scene: THREE.Scene | undefined = undefined;

  renderer: THREE.WebGLRenderer;
  cssRenderer: CSS3DRenderer;
  camera: THREE.PerspectiveCamera;
  containerResizeObserver: ResizeObserver;
  webglAppResizeObserver: ResizeObserver;
  webglAppResizeFuncs: (() => void)[] = [];
  animates: (() => void)[] = [];
  startupFuncs: (() => void)[] = [];
  isAnimating?: boolean;
  isAutoSize?: boolean;
  width: number;
  height: number;

  constructor(options: LayerControllerOptions = {}) {
    const {
      isAnimating = true,
      containerElement,
      isAutoSize = false,
      width = 1440,
      height = 900,
    } = options;

    this.isAnimating = isAnimating;
    this.isAutoSize = isAutoSize;
    this.width = width;
    this.height = height;

    this.camera = new THREE.PerspectiveCamera(70, 0, 0.01, 2000);
    this.camera.position.z = 1500;

    // Support SSR
    if (typeof document !== 'undefined') {
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.domElement.classList.add('webgl-app');

      this.cssRenderer = new CSS3DRenderer();
      this.cssRenderer.domElement.classList.add('css-app');

      this.webglAppResizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            for (const func of this.webglAppResizeFuncs) {
              func();
            }

            this.recalculateSize();
          }
        }
      });

      this.webglAppResizeObserver.observe(this.webglApp);

      this.containerResizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            this.recalculateSize();
          }
        }
      });

      this.recalculateSize();
    } else {
      this.renderer = {} as THREE.WebGL1Renderer;
      this.cssRenderer = {} as CSS3DRenderer;
      this.containerResizeObserver = {} as ResizeObserver;
      this.webglAppResizeObserver = {} as ResizeObserver;
    }

    if (!this.isAutoSize) {
      this.camera.aspect = this.width / this.height;
    }

    if (containerElement) {
      this.#containerElement = containerElement;
      this.containerResizeObserver.observe(this.#containerElement);
    }
  }

  get isStartup() {
    return this.#isStartup;
  }

  get containerElement() {
    return this.#containerElement;
  }

  get webglApp() {
    return this.renderer.domElement;
  }

  get cssApp() {
    return this.cssRenderer.domElement;
  }

  get clock() {
    return this.#clock;
  }

  get scene() {
    return this.#scene;
  }

  startup() {
    for (const func of this.startupFuncs) {
      func();
    }

    this.#isStartup = true;

    this.frameAnimate();
  }

  setContainerElement = (element: HTMLElement) => {
    if (this.#containerElement) {
      this.containerResizeObserver.unobserve(this.#containerElement);
    }

    this.#containerElement = element;
    this.containerResizeObserver.observe(this.#containerElement);
    this.recalculateSize();
  };

  setScene = (scene?: THREE.Scene) => {
    this.#scene = scene;

    if (!this.#scene) {
      this.renderer.clear();
      this.cssRenderer.domElement.style.display = 'none';
    } else {
      this.cssRenderer.domElement.style.display = 'initial';
    }

    this.renderCss();
    this.renderWebgl();

    this.#eventTarget.dispatchEvent(
      new CustomEvent('scene-changed', {
        detail: {
          scene: this.#scene,
        },
      }),
    );
  };

  addEventListener: LayerControllerAddEventListener = (...arg) => {
    this.#eventTarget.addEventListener(...arg);
  };

  removeEventListener: LayerControllerRemoveEventListener = (...arg) => {
    this.#eventTarget.removeEventListener(...arg);
  };

  subscribeStarup = (func: () => void) => {
    return this.startupFuncs.push(func);
  };

  subscribeWebglAppResize = (func: () => void) => {
    return this.webglAppResizeFuncs.push(func);
  };

  subscribeAnimate = (animate: () => void) => {
    return this.animates.push(animate);
  };

  recalculateSize = () => {
    if (!this.#containerElement) {
      console.warn(`containerElement is ${this.#containerElement} !`);
      return;
    }

    const rect = this.#containerElement.getBoundingClientRect();

    if (this.isAutoSize) {
      this.renderer.setSize(rect.width, rect.height);
      this.camera.aspect = rect.width / rect.height;
    } else {
      this.renderer.setSize(this.width, this.height);
    }

    if (rect.width / rect.height < this.width / this.height) {
      this.renderer.domElement.style.width = '100%';
      this.renderer.domElement.style.height = 'auto';
    } else {
      this.renderer.domElement.style.width = 'auto';
      this.renderer.domElement.style.height = '100%';
    }

    this.cssRenderer.setSize(rect.width, rect.height);

    this.camera.updateProjectionMatrix();
    this.renderCss();
  };

  renderCss = () => {
    if (this.#scene) {
      this.cssRenderer.render(this.#scene, this.camera);
    }
  };

  renderWebgl = () => {
    if (this.#scene) {
      this.renderer.render(this.#scene, this.camera);
    }
  };

  frameAnimate = (time?: number) => {
    if (this.isAnimating) {
      requestAnimationFrame(this.frameAnimate);
      this.#eventTarget.dispatchEvent(
        new CustomEvent('frame-changed', {
          detail: {
            time,
          },
        }),
      );
    }

    for (const animation of this.animates) {
      animation();
    }

    this.renderWebgl();
  };
}

export default LayerController;
