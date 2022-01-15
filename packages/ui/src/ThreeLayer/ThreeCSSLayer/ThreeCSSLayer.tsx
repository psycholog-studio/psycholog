import React, { useEffect, useRef, useCallback, ReactNode } from 'react'
import ReactDom from 'react-dom'
import * as THREE from 'three'
import { cx } from '@emotion/css'
import ThreeManager from '../ThreeManager'
import * as styles from './ThreeCSSLayer.styles'
import ReactCSSObject from './ReactCSSObject'

export interface ThreeCSSLayerProps {
  className?: string
  onStartup?: () => void
  children?: ReactNode
  scene?: THREE.Scene
}

const ThreeCSSLayer = (props: ThreeCSSLayerProps): JSX.Element => {
  const { className, scene, children, onStartup } = props
  const rootRef = useRef<HTMLElement>()
  const cssObjectRef = useRef<ReactCSSObject>(new ReactCSSObject())

  const rootRefCallback = useCallback((element: HTMLDivElement) => {
    if (!rootRef.current) {
      rootRef.current = element
    }

    if (ThreeManager.ThreeContainer.containerElement !== rootRef.current) {
      ThreeManager.ThreeContainer.setContainerElement(rootRef.current)
      rootRef.current.innerHTML = ''
      rootRef.current.appendChild(ThreeManager.ThreeContainer.cssApp)

      if (!ThreeManager.ThreeContainer.isStartup) {
        ThreeManager.ThreeContainer.startup()
        onStartup?.()
      }
    }
  }, [])

  useEffect(() => {
    if (scene) {
      scene.add(cssObjectRef.current.css3DSprite)

      return () => {
        scene.remove(cssObjectRef.current.css3DSprite)
      }
    }
  }, [scene])

  useEffect(() => {
    ReactDom.render(<>{children}</>, cssObjectRef.current.rootElement, () => {
      ThreeManager.ThreeContainer.renderCss()
    })
  }, [children])

  return (
    <div ref={rootRefCallback} className={cx(styles.root, className)}></div>
  )
}

export default ThreeCSSLayer
