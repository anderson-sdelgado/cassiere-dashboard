import { StoryFn, Meta } from '@storybook/react';
import Relation, { RelationProps } from '.';

export default {
  title: 'Relation',
  component: Relation,
  args: {
    children: `Relation`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<RelationProps>;

export const Default: StoryFn<RelationProps> = (args) => {
  return (
    <div>
      <Relation {...args} />
    </div>
  );
};
