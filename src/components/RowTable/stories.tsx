import { StoryFn, Meta } from '@storybook/react';
import RowTable, { RowTableProps } from '.';

export default {
  title: 'RowTable',
  component: RowTable,
  args: {
    children: `RowTable`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<RowTableProps>;

export const Default: StoryFn<RowTableProps> = (args) => {
  return (
    <div>
      <RowTable {...args} />
    </div>
  );
};
