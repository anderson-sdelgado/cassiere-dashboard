import { StoryFn, Meta } from '@storybook/react';
import FindRelation, { FindRelationProps } from '.';

export default {
  title: 'FindRelation',
  component: FindRelation,
  args: {
    children: `FindRelation`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FindRelationProps>;

export const Default: StoryFn<FindRelationProps> = (args) => {
  return (
    <div>
      <FindRelation {...args} />
    </div>
  );
};
