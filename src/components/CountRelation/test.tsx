import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import CountRelation, { CountRelationProps } from '.';

const props: CountRelationProps = {
  children: 'any',
};

describe('<CountRelation />', () => {
  it('should render', () => {
    renderTheme(<CountRelation {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
