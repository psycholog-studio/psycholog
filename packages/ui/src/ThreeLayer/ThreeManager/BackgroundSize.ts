export const defaultBackgroundSize = {
  width: 1440,
  height: 900,

  get aspect() {
    return this.width / this.height
  },
}

const _BackgroundSize = {
  ...defaultBackgroundSize,
}

export const setBackgrounSize = (width: number, height: number) => {
  _BackgroundSize.width = width
  _BackgroundSize.height = height
}

const BackgroundSize: {
  readonly width: number
  readonly height: number
  readonly aspect: number
} = Object.defineProperties(_BackgroundSize, {
  'width': {
    writable: false,
  },
  'height': {
    writable: false,
  },
})

export default BackgroundSize
