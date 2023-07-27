import { StoryFn, Meta } from '@storybook/react';
import Video, { VideoProps } from '.';

export default {
  title: 'Video',
  component: Video,
  args: {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<VideoProps>;

export const Default: StoryFn<VideoProps> = (args) => {
  return (
    <div>
      <Video {...args} />
    </div>
  );
};
