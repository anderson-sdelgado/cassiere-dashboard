import { StoryFn, Meta } from '@storybook/react';
import FindRelation from '.';

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
} as Meta;

export const Default: StoryFn = (args) => {
  return (
    <div>
      <FindRelation {...args} />
    </div>
  );
};
