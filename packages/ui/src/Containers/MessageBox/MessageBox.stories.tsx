import { Story, Meta } from '@storybook/react';
import { css } from '@emotion/css';
import MessageBox, { MessageBoxProps } from './MessageBox';
import { paddingDecorator } from '../../storyUtils';

export default {
  title: 'ui/Containers/MessageBox',
  component: MessageBox,
  decorators: [paddingDecorator],
} as Meta;

const Template: Story<MessageBoxProps> = (args) => {
  return (
    <MessageBox
      {...args}
      className={css`
        padding: 50px;
      `}
    >
      messageBox
    </MessageBox>
  );
};

export const Normal = Template.bind({});

Normal.parameters = {
  backgrounds: { default: 'dark' },
};

Normal.args = {
  collapsed: false,
};
