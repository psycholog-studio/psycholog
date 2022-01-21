import { ForwardedRef, useRef, useEffect } from 'react'

const useForwardedRef = <T>(ref: ForwardedRef<T>, initValue: T) => {
  const innerRef = useRef<T>(initValue)
  useEffect(() => {
    if (!ref) return
    if (typeof ref === 'function') {
      ref(innerRef.current)
    } else {
      ref.current = innerRef.current
    }
  })

  return innerRef
}

export default useForwardedRef
