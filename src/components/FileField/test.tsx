import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import FileField from '.';

describe('<FileField />', () => {
  it('should render', () => {
    renderTheme(<FileField name="arquivo" />);
    expect(screen.getByLabelText(/arquivo/i)).toBeInTheDocument();
  });
});
