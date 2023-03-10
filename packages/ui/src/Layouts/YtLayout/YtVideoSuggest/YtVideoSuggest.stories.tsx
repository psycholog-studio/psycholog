import { Story, Meta } from '@storybook/react';
import YtVideoSuggest, { YtVideoSuggestProps } from './YtVideoSuggest';

export default {
  title: 'ui/Layouts/YtVideo/YtVideoSuggest',
  component: YtVideoSuggest,
} as Meta;

const NormalTemplate: Story<YtVideoSuggestProps> = (args) => {
  return <YtVideoSuggest {...args}></YtVideoSuggest>;
};

export const Normal = NormalTemplate.bind({});

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

Normal.args = {
  items: Array(20).fill({
    title: 'Vedio Title',
    desc: 'This is Vedio',
    time: '3:24',
  } as ArrayElement<YtVideoSuggestProps['items']>),
} as YtVideoSuggestProps;
