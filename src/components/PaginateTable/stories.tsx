import { StoryFn, Meta } from '@storybook/react';
import PaginateTable, { PaginateTableProps } from '.';

export default {
  title: 'PaginateTable',
  component: PaginateTable,
  args: {
    children: `PaginateTable`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PaginateTableProps>;

export const Default: StoryFn<PaginateTableProps> = (args) => {
  return (
    <div>
      <PaginateTable {...args} />
    </div>
  );
};
