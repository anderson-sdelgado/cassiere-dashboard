import { StoryFn, Meta } from '@storybook/react';
import CheckboxField, { CheckboxFieldProps } from '.';

export default {
  title: 'CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<CheckboxFieldProps>;

export const Default: StoryFn<CheckboxFieldProps> = (args) => {
  return (
    <div>
      <CheckboxField {...args} />
    </div>
  );
};
