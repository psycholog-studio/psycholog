import { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react';
import UnderlineItem, { UnderlineItemProps } from './UnderlineItem';
import { paddingDecorator } from '../storyUtils';

export default {
  title: 'ui/UnderlineItem',
  component: UnderlineItem,
  decorators: [paddingDecorator],
} as Meta;

const Template: Story<UnderlineItemProps> = (args) => {
  const [selected, setSelected] = useState(args.selected ?? false);

  useEffect(() => {
    if (args.selected !== undefined) {
      setSelected(args.selected);
    }
  }, [args.selected]);
  return (
    <UnderlineItem {...args} selected={selected}>
      <div
        onClick={() => {
          setSelected(!selected);
        }}
      >
        UnderlineItem
      </div>
    </UnderlineItem>
  );
};

export const Normal = Template.bind({});

Normal.args = {
  className: 'test-class',
};
