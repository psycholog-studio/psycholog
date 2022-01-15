import BackgroundSize from './BackgroundSize'
import ThreeContainer from './ThreeContainer'

const _ThreeManager = {
  BackgroundSize,
  ThreeContainer: new ThreeContainer(),
}

const ThreeManager = Object.defineProperties(_ThreeManager, {
  'BackgroundSize': {
    writable: false,
  },
  'ThreeContainer': {
    writable: false,
  },
})

export default ThreeManager
