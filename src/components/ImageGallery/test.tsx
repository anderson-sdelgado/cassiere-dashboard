import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import ImageGallery from '.';

describe('<ImageGallery />', () => {
  it('should render', () => {
    renderTheme(<ImageGallery />);
    expect(screen.getByText(/images/i)).toBeInTheDocument();
  });
});
