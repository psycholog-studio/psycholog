import { useState, useEffect } from 'react'
import * as styles from './TextsEffect.styles'

const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min
}

const getRandomTexts = () => {
  const aText = [
    'test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!',
    'test!test!test!test!test!test!test!test!',
  ]

  const t = 'test!'
  for (let i = 0; i < 70; i++) {
    const q = getRandom(4, 30)
    let s = ''
    for (let j = 0; j < q; j++) {
      s += t
    }
    aText.push(s)
  }

  return aText
}

const delay = (interval: number): Promise<unknown> => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, interval)
  })
}

const TextsEffect = (): JSX.Element => {
  const [texts, setTexts] = useState<string[]>([])

  const animate = async () => {
    const randomTexts = getRandomTexts()
    let currentIndex = 0
    let isEsc = false
    const onEscClicked = function (e: { which: number }) {
      if (e.which === 27) {
        isEsc = true
      }
      document.removeEventListener('keydown', onEscClicked)
    }
    document.addEventListener('keydown', onEscClicked)
    while (currentIndex < randomTexts.length) {
      if (isEsc) {
        break
      }

      const lt = getRandom(10, 50)
      await delay(lt)
      setTexts((prev) => {
        const next = [...prev]
        next.push(randomTexts[currentIndex])
        return next
      })
      currentIndex++
    }
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <div className={styles.root}>
      {texts.map((text, index) => {
        return <span key={index}>{text}</span>
      })}
    </div>
  )
}

export default TextsEffect
