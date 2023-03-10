import * as styles from './YtVideoChatMessages.styles';
import YtVideoChatMessage from '../YtVideoChatMessage/YtVideoChatMessage';

export interface YtVideoChatMessagesProps {
  messages?: {
    name: string;
    message: string;
  }[];
}

const YtVideoChatMessages = (props: YtVideoChatMessagesProps) => {
  const { messages } = props;

  return (
    <div className={styles.root}>
      <div className={styles.header}>重點聊天室訊息</div>
      <div className={styles.content}>
        {messages?.map((message, index) => (
          <YtVideoChatMessage
            key={index + message.name}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <div className={styles.footer}>隱藏即時通訊</div>
    </div>
  );
};

export default YtVideoChatMessages;
