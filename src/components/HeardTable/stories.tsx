import { StoryFn, Meta } from '@storybook/react';
import HeardTable, { HeardTableProps } from '.';

import rowMock from '../Table/rowMock';

export default {
  title: 'HeardTable',
  component: HeardTable,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<HeardTableProps>;

export const Default: StoryFn<HeardTableProps> = () => {
  return (
    <div>
      <HeardTable titles={Object.keys(rowMock[1])} />
    </div>
  );
};
