import React, { ReactNode } from 'react'
import { cx, css } from '@emotion/css'
import * as styles from './ShellContainer.styles'

export interface ShellContainerProps {
  width: number
  height: number
  children?: ReactNode
}

const offsetX = 34.4

const ShellContainer = (props: ShellContainerProps): JSX.Element => {
  const { width, height, children } = props

  const rectWidth = width
  const rectHeight = height

  const cssRootSize = css`
    width: ${width}px;
    height: ${height}px;

    svg {
      left: -${offsetX}px;
    }
  `

  return (
    <div className={cx(styles.root, cssRootSize)}>
      <svg width={width + offsetX} height={height}>
        <rect
          x={offsetX}
          y="0"
          width={rectWidth}
          height={rectHeight}
          strokeWidth="2.15px"
          stroke="rgb(0,255,233)"
          fill="#161E21"
          fillOpacity="0.5"
        />
        {/* <path d="M20,30L20,20L30,20" stroke-linejoin="round" stroke-linecap="round" style="fill:none;stroke:rgb(27,196,255);stroke-width:3px;"/> */}
        <path
          d={`M0,0L${offsetX},0L${offsetX},150L0,120L0,0`}
          style={{
            fill: 'rgb(0, 255, 233)',
            stroke: 'rgb(125, 255, 244)',
            strokeWidth: '2.15px',
          }}
        />
        <rect
          x={offsetX}
          y={rectHeight - 15}
          width={rectWidth}
          height="15"
          style={{
            fill: 'rgb(0, 255, 233)',
            stroke: 'rgb(125, 255, 244)',
            strokeWidth: '2.15px',
          }}
        />
      </svg>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default ShellContainer
