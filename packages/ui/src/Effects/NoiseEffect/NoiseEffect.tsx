import React, { useState } from 'react'
import * as styles from './NoiseEffect.styles'

const NoiseEffect = (): JSX.Element => {
  const [testNoiseX] = useState(200)
  const [testNoiseY] = useState(5)

  return (
    <div className={styles.root}>
      <svg className="effect">
        <defs>
          <filter id="filter-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${testNoiseX} ${testNoiseY}`}
              numOctaves="1"
              result="warp"
            ></feTurbulence>
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warp"
            />
            {/* <feDisplacementMap in="M" in2="BackgroundImage" scale="100" xChannelSelector="R"/> */}
          </filter>
        </defs>
      </svg>
      <div
        style={{
          WebkitFilter: 'url("#filter-noise")',
        }}
      >
        test!
      </div>
    </div>
  )
}

export default NoiseEffect
