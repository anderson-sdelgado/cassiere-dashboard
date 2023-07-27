import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import RadioField, { RadioFieldProps } from '.';

const props: RadioFieldProps = {
  children: 'any',
};

describe('<RadioField />', () => {
  it('should render', () => {
    renderTheme(<RadioField {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
