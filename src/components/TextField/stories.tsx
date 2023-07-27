import { StoryFn, Meta } from '@storybook/react';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    name: 'title',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<TextFieldProps>;

export const Default: StoryFn<TextFieldProps> = (args) => {
  return (
    <div>
      <TextField {...args} />
    </div>
  );
};
