import { StoryFn, Meta } from '@storybook/react';
import Menu from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: `Menu`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
