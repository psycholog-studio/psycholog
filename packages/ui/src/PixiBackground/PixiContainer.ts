import * as PIXI from 'pixi.js';

export type PIXIContainerOptions = {
  width?: number;
  height?: number;
  transparent?: boolean;
};

class PIXIContainer {
  width: number;
  height: number;
  pixiApp: PIXI.Application;

  constructor(options: PIXIContainerOptions = {}) {
    this.width = options.width || 0;
    this.height = options.height || 0;
    this.pixiApp = new PIXI.Application({
      width: this.width,
      height: this.height,
      antialias: true,
      transparent: options.transparent || false,
      // resolution: window.devicePixelRatio || 1
      // resolution: 1 //這邊解析度應該由系統調整
    });
  }

  get center(): {
    x: number;
    y: number;
  } {
    return {
      x: this.width / 2,
      y: this.height / 2,
    };
  }
}

export default PIXIContainer;
