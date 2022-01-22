import { useContext } from 'react'
import ThreeManager from '../core/ThreeManager'
import { ThreeManagerContext } from '../ThreeGraphic'

const useThreeManager = (): ThreeManager => {
  const threeManagerRef = useContext(ThreeManagerContext)
  if (!threeManagerRef.current) {
    threeManagerRef.current = new ThreeManager()
  }
  return threeManagerRef.current
}

export default useThreeManager
