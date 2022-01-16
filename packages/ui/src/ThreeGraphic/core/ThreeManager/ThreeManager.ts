import BackgroundController from './BackgroundController'
import LayerController from './LayerController'

export class ThreeManager {
  #BackgroundController = new BackgroundController()
  #LayerController = new LayerController()

  get BackgroundController() {
    return this.#BackgroundController
  }

  get LayerController() {
    return this.#LayerController
  }
}

export default new ThreeManager()
