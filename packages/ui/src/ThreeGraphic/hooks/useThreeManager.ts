import { useContext } from 'react'
import ThreeManager from '../core/ThreeManager'
import { ThreeManagerContext } from '../ThreeGraphic'

const useThreeManager = (): ThreeManager => {
  const threeManagerRef = useContext(ThreeManagerContext)
  return threeManagerRef.current
}

export default useThreeManager
