import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: `Button`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  );
};
