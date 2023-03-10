import { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from './Input';
import { paddingDecorator } from '../storyUtils';
import { css } from '@emotion/css';

export default {
  title: 'ui/Input',
  component: Input,
  decorators: [paddingDecorator],
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <Input
      {...args}
      value={value}
      className={css`
        height: 100px;
      `}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const NormalInput = Template.bind({});

NormalInput.parameters = {
  backgrounds: { default: 'dark' },
};

NormalInput.args = {
  component: 'input',
  value: 'input value',
};

export const TextareaInput = Template.bind({});

TextareaInput.args = {
  component: 'textarea',
  value:
    'test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!test!',
};

TextareaInput.parameters = {
  backgrounds: { default: 'dark' },
};
