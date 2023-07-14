import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Button, { ButtonProps } from '.';

const props: ButtonProps = {
  children: 'any',
};

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(<Button {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
