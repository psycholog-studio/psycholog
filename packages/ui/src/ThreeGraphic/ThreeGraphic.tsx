import React, {
  forwardRef,
  ReactNode,
  ForwardedRef,
  createContext,
  createRef,
  RefObject,
} from 'react'
import ThreeManager from './core/ThreeManager'
import useForwardedRef from '@psycholog/utils/hooks/useForwardedRef'

export const ThreeManagerContext = createContext<RefObject<ThreeManager>>(
  createRef()
)

type ThreeGraphicProps = {
  children: ReactNode
  threeManager?: ThreeManager
}

const ThreeGraphic = forwardRef<ThreeManager, ThreeGraphicProps>(
  (props: ThreeGraphicProps, ref: ForwardedRef<ThreeManager>) => {
    const { threeManager, children } = props
    let targetThreeManager = threeManager

    if (!targetThreeManager) {
      targetThreeManager = new ThreeManager()
    }

    const threeManagerRef = useForwardedRef<ThreeManager>(
      ref,
      targetThreeManager
    )
    return (
      <ThreeManagerContext.Provider value={threeManagerRef}>
        {children}
      </ThreeManagerContext.Provider>
    )
  }
)

ThreeGraphic.displayName = 'ThreeGraphic'

export default ThreeGraphic
