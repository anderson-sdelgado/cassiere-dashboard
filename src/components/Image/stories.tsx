import { StoryFn, Meta } from '@storybook/react';
import Image, { ImageProps } from '.';

export default {
  title: 'Image',
  component: Image,
  args: {
    src: 'img/kit.jpg',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ImageProps>;

export const Default: StoryFn<ImageProps> = (args) => {
  return (
    <div>
      <Image {...args} />
    </div>
  );
};
