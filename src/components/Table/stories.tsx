import { StoryFn, Meta } from '@storybook/react';
import Table, { TableProps } from '.';

export default {
  title: 'Table',
  component: Table,
  args: {
    children: `Table`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<TableProps>;

export const Default: StoryFn<TableProps> = (args) => {
  return (
    <div>
      <Table {...args} />
    </div>
  );
};
