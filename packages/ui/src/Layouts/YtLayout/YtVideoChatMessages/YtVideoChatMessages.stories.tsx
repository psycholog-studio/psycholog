import { Story, Meta } from '@storybook/react';
import YtVideoChatMessages, {
  YtVideoChatMessagesProps,
} from './YtVideoChatMessages';

export default {
  title: 'ui/Layouts/YtVideo/YtVideoChatMessages',
  component: YtVideoChatMessages,
} as Meta;

const NormalTemplate: Story<YtVideoChatMessagesProps> = (args) => {
  return <YtVideoChatMessages {...args}></YtVideoChatMessages>;
};

export const Normal = NormalTemplate.bind({});

Normal.args = {
  messages: [
    { name: 'User', message: `I'm User.` },
    { name: 'User', message: `I'm User.` },
    { name: 'User', message: `I'm User.` },
    { name: 'User', message: `I'm User.` },
  ],
};
