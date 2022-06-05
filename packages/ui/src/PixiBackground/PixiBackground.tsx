import React, { useRef, useCallback, useEffect } from 'react'
import * as PIXI from 'pixi.js'
import PIXIContainer from './PixiContainer'
import * as styles from './PixiBackground.styles'

function createGradTexture() {
  // adjust it if somehow you need better quality for very very big images
  const quality = 256
  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = quality

  const ctx = canvas.getContext('2d')

  if (ctx) {
    const grd = ctx.createLinearGradient(0, 0, 0, quality)
    grd.addColorStop(0, 'rgba(0, 0, 0, 1.0)')
    grd.addColorStop(0.7, 'rgba(0, 0, 0, 0.5)')
    grd.addColorStop(1, 'rgba(0, 0, 0, 0.0)')

    ctx.fillStyle = grd
    ctx.fillRect(0, 0, 1, quality)
  }

  return PIXI.Texture.from(canvas)
}

const SCREEN_SIZE_WIDTH = 1920
const SCREEN_SIZE_HEIGHT = 1280

const PixiBackground = (): JSX.Element => {
  const rootRef = useRef<HTMLDivElement>()
  const pixiContainer = useRef(
    new PIXIContainer({
      width: SCREEN_SIZE_WIDTH,
      height: SCREEN_SIZE_HEIGHT,
    })
  )

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    rootRef.current = element
    element.appendChild(pixiContainer.current.pixiApp.view)
  }, [])

  useEffect(() => {
    const backgroundPixiContaienr = new PIXI.Container()
    pixiContainer.current.pixiApp.stage.addChild(backgroundPixiContaienr)
    // this._backgroundPixiContaienr.x = this.pixiContainer.pixiApp.screen.width / 2
    // this._backgroundPixiContaienr.y = this.pixiContainer.pixiApp.screen.height
    // this._backgroundPixiContaienr.pivot.x = this._backgroundPixiContaienr.width / 2
    // this._backgroundPixiContaienr.pivot.y = this._backgroundPixiContaienr.height / 2
    const gradientPixiContaienr = new PIXI.Container()
    pixiContainer.current.pixiApp.stage.addChild(gradientPixiContaienr)

    const gradTexture = createGradTexture()

    const topGradient = new PIXI.Sprite(gradTexture)
    topGradient.position.set(0, 0)
    topGradient.width = SCREEN_SIZE_WIDTH
    topGradient.height = 140
    gradientPixiContaienr.addChild(topGradient)

    const bottomGradient = new PIXI.Sprite(gradTexture)
    bottomGradient.position.set(SCREEN_SIZE_WIDTH / 2, SCREEN_SIZE_HEIGHT)
    bottomGradient.width = SCREEN_SIZE_WIDTH
    bottomGradient.height = 140
    bottomGradient.rotation = Math.PI
    bottomGradient.anchor.set(0.5, 0)
    gradientPixiContaienr.addChild(bottomGradient)
  }, [])

  return <div ref={rootRefCallback} className={styles.root}></div>
}

export default PixiBackground
