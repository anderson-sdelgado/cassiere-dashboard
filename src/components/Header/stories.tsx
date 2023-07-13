import { StoryFn, Meta } from '@storybook/react';
import Header, { HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    children: `Header`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<HeaderProps>;

export const Default: StoryFn<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
