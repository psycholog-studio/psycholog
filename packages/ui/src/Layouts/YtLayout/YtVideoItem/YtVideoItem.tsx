import * as styles from './YtVideoItem.styles'

export interface YtVideoItemProps {
  title?: string
  desc?: string
  time?: string
  progress?: number
}

const YtVideoItem = (props: YtVideoItemProps) => {
  const { title, desc, time, progress = 0.25 } = props

  return (
    <div className={styles.root}>
      <div className={styles.imgWrap}>
        <div className={styles.thumbnail}></div>
        <div className={styles.timeStatus}>{time}</div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressThumb}
            style={{
              width: `${progress * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  )
}

export default YtVideoItem
