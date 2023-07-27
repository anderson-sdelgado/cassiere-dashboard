import { StoryFn, Meta } from '@storybook/react';
import FileField, { FileFieldProps } from '.';

export default {
  title: 'FileField',
  component: FileField,
  args: {
    name: 'cover',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<FileFieldProps>;

export const Default: StoryFn<FileFieldProps> = (args) => {
  return (
    <div>
      <FileField {...args} />
    </div>
  );
};
