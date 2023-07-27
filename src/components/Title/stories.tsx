import { StoryFn, Meta } from '@storybook/react';
import Title, { TitleProps } from '.';

export default {
  title: 'Title',
  component: Title,
  args: {
    children: `Title`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<TitleProps>;

export const Default: StoryFn<TitleProps> = (args) => {
  return (
    <div>
      <Title {...args} />
    </div>
  );
};
