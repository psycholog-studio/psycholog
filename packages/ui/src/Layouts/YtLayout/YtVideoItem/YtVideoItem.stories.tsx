import { Story, Meta } from '@storybook/react';
import YtVideoItem, { YtVideoItemProps } from './YtVideoItem';

export default {
  title: 'ui/Layouts/YtVideo/YtVideoItem',
  component: YtVideoItem,
} as Meta;

const NormalTemplate: Story<YtVideoItemProps> = (args) => {
  return <YtVideoItem {...args}></YtVideoItem>;
};

export const Normal = NormalTemplate.bind({});

Normal.args = {
  title: 'Vedio Title',
  desc: 'this is a Vedio',
  time: '3:24',
} as YtVideoItemProps;
