import * as styles from './YtVideoChatMessage.styles';

export interface YtVideoChatMessageProps {
  name: string;
  message: string;
}

const YtVideoChatMessage = (props: YtVideoChatMessageProps) => {
  const { name, message } = props;

  return (
    <div className={styles.root}>
      <div className={styles.img}></div>
      <div className={styles.name}>{name}</div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default YtVideoChatMessage;
