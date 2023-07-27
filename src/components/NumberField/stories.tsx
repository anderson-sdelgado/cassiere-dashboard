import { StoryFn, Meta } from '@storybook/react';
import NumberField, { NumberFieldProps } from '.';

export default {
  title: 'NumberField',
  component: NumberField,
  args: {
    name: 'price',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<NumberFieldProps>;

export const Default: StoryFn<NumberFieldProps> = (args) => {
  return (
    <div>
      <NumberField {...args} />
    </div>
  );
};
