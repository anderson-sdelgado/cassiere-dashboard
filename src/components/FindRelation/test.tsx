import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import FindRelation, { FindRelationProps } from '.';

const props: FindRelationProps = {
  children: 'any',
};

describe('<FindRelation />', () => {
  it('should render', () => {
    renderTheme(<FindRelation {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
