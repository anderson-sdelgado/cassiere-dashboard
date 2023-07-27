import { StoryFn, Meta } from '@storybook/react';
import VideoGallery, { VideoGalleryProps } from '.';

export default {
  title: 'VideoGallery',
  component: VideoGallery,
  args: {
    children: `VideoGallery`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<VideoGalleryProps>;

export const Default: StoryFn<VideoGalleryProps> = (args) => {
  return (
    <div>
      <VideoGallery {...args} />
    </div>
  );
};
