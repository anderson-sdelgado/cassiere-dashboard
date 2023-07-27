import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import NumberField, { NumberFieldProps } from '.';

const props: NumberFieldProps = {
  children: 'any',
};

describe('<NumberField />', () => {
  it('should render', () => {
    renderTheme(<NumberField {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
