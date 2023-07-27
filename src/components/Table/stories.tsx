import { StoryFn, Meta } from '@storybook/react';
import Table from '.';

import rowMock from './rowMock';

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
} as Meta;

export const Default: StoryFn = () => {
  return (
    <div>
      <Table />
    </div>
  );
};
