import { StoryFn, Meta } from '@storybook/react';
import RowTable, { RowTableProps } from '.';

export default {
  title: 'RowTable',
  component: RowTable,
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
