import { StoryFn, Meta } from '@storybook/react';
import ImageGallery, { ImageGalleryProps } from '.';

export default {
  title: 'ImageGallery',
  component: ImageGallery,
  args: {
    children: `ImageGallery`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<ImageGalleryProps>;

export const Default: StoryFn<ImageGalleryProps> = (args) => {
  return (
    <div>
      <ImageGallery {...args} />
    </div>
  );
};
