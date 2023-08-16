import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import RelationTemplate, { RelationTemplateProps } from '.';

const props: RelationTemplateProps = {
  children: 'any',
};

describe('<Relation />', () => {
  it('should render', () => {
    renderTheme(<RelationTemplate {...props} />);
    expect(screen.getByText('any')).toBeInTheDocument();
  });
});
