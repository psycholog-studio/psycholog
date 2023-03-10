import YtVideoItem, { YtVideoItemProps } from '../YtVideoItem';
import * as styles from './YtVideoSuggest.styles';

export interface YtVideoSuggestProps {
  items: Required<YtVideoItemProps>[];
}

const YtVideoSuggest = (props: YtVideoSuggestProps) => {
  const { items = [] } = props;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.groupTitle}>合集 - XXXXX</div>
        <div className={styles.groupSubTitle}>Psycho</div>
        <div className={styles.close}></div>
        <div className={styles.options}></div>
      </div>
      <div className={styles.content}>
        {items.map((item, index) => {
          return <YtVideoItem key={index + item?.title ?? ''} {...item} />;
        })}
      </div>
    </div>
  );
};

export default YtVideoSuggest;
