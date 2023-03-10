import YtVideoChatMessages from './YtVideoChatMessages';
import * as styles from './YtLayout.styles';

export interface YtLayoutProps {
  messages: {
    name: string;
    message: string;
  }[];
}

const YtLayout = (props: YtLayoutProps) => {
  const { messages } = props;

  return (
    <div className={styles.root}>
      <div className={styles.primary}>
        <video width="320" height="240" autoPlay muted>
          <source src="/assets/demo/ocean/ocean-74888.mp4"></source>
        </video>
      </div>
      <div className={styles.secondary}>
        <YtVideoChatMessages messages={messages} />
      </div>
    </div>
  );
};

export default YtLayout;
