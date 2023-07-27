import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import AreaField, { AreaFieldProps } from '.';

const props: AreaFieldProps = {
  children: 'any',
};

describe('<AreaField />', () => {
  it('should render', () => {
    renderTheme(<AreaField {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
