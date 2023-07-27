import { StoryFn, Meta } from '@storybook/react';
import AreaField, { AreaFieldProps } from '.';

export default {
  title: 'AreaField',
  component: AreaField,
  args: {
    name: 'title',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<AreaFieldProps>;

export const Default: StoryFn<AreaFieldProps> = (args) => {
  return (
    <div>
      <AreaField {...args} />
    </div>
  );
};
