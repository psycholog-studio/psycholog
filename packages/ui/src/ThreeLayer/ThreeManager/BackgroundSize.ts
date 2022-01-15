export type BackgroundSize = {
  width: number
  height: number
}

export const defaultBackgroundSize = {
  width: 1440,
  height: 900,
}

const _BackgroundSize = {
  ...defaultBackgroundSize,
}

export const setBackgrounSize = (width: number, height: number) => {
  _BackgroundSize.width = width
  _BackgroundSize.height = height
}

const BackgroundSize = Object.defineProperties(_BackgroundSize, {
  'width': {
    writable: false,
  },
  'height': {
    writable: false,
  },
})

export default BackgroundSize
