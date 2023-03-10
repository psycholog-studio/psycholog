import BackgroundController from './BackgroundController';
import LayerController from './LayerController';

export type ThreeManagerOptions = {
  backgroundController?: BackgroundController;
  layerController?: LayerController;
};

export class ThreeManager {
  #backgroundController: BackgroundController;
  #layerController: LayerController;

  constructor(options: ThreeManagerOptions = {}) {
    if (options.backgroundController) {
      this.#backgroundController = options.backgroundController;
    } else {
      this.#backgroundController = new BackgroundController();
    }

    if (options.layerController) {
      this.#layerController = options.layerController;
    } else {
      this.#layerController = new LayerController();
    }
  }

  get backgroundController() {
    return this.#backgroundController;
  }

  get layerController() {
    return this.#layerController;
  }
}

export default ThreeManager;
