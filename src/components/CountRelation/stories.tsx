import { StoryFn, Meta } from '@storybook/react';
import CountRelation, { CountRelationProps } from '.';

export default {
  title: 'CountRelation',
  component: CountRelation,
  args: {
    children: `CountRelation`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<CountRelationProps>;

export const Default: StoryFn<CountRelationProps> = (args) => {
  return (
    <div>
      <CountRelation {...args} />
    </div>
  );
};
