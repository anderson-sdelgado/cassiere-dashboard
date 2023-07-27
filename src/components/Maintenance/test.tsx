import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import Maintenance, { MaintenanceProps } from '.';

const props: MaintenanceProps = {
  children: 'any',
};

describe('<Maintenance />', () => {
  it('should render', () => {
    renderTheme(<Maintenance {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
