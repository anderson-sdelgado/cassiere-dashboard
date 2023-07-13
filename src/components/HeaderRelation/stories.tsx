import { StoryFn, Meta } from '@storybook/react';
import HeaderRelation, { HeaderRelationProps } from '.';

export default {
  title: 'HeaderRelation',
  component: HeaderRelation,
  args: {
    children: `HeaderRelation`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<HeaderRelationProps>;

export const Default: StoryFn<HeaderRelationProps> = (args) => {
  return (
    <div>
      <HeaderRelation {...args} />
    </div>
  );
};
