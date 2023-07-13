import { StoryFn, Meta } from '@storybook/react';
import ItemMenu, { ItemMenuProps } from '.';

export default {
  title: 'ItemMenu',
  component: ItemMenu,
  args: {
    children: `ItemMenu`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ItemMenuProps>;

export const Default: StoryFn<ItemMenuProps> = (args) => {
  return (
    <div>
      <ItemMenu {...args} />
    </div>
  );
};
