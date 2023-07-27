import { StoryFn, Meta } from '@storybook/react';
import RadioField, { RadioFieldProps } from '.';

export default {
  title: 'RadioField',
  component: RadioField,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<RadioFieldProps>;

export const Default: StoryFn<RadioFieldProps> = (args) => {
  return (
    <div>
      <RadioField {...args} />
    </div>
  );
};
