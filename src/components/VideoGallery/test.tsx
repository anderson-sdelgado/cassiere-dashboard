import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import VideoGallery from '.';

describe('<VideoGallery />', () => {
  it('should render', () => {
    renderTheme(<VideoGallery />);
    expect(screen.getByText(/images/i)).toBeInTheDocument();
  });
});
