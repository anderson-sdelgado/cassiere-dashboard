import { StoryFn, Meta } from '@storybook/react';
import ElementTable, { ElementTableProps } from '.';

export default {
  title: 'ElementTable',
  component: ElementTable,
  args: {
    children: `ElementTable`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ElementTableProps>;

export const Default: StoryFn<ElementTableProps> = (args) => {
  return (
    <div>
      <ElementTable {...args} />
    </div>
  );
};
