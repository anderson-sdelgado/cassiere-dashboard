import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import VideoGallery, { VideoGalleryProps } from '.';

const props: VideoGalleryProps = {
  children: 'any',
};

describe('<VideoGallery />', () => {
  it('should render', () => {
    renderTheme(<VideoGallery {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
