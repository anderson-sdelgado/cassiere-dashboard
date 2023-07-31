import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/render-theme';
import { Add as AddIcon } from '@styled-icons/material-outlined/Add';
import Button from '.';

describe('<Button />', () => {
  it('should render', () => {
    renderTheme(
      <Button bgcolor="red" color="white">
        Inserir
      </Button>,
    );
    expect(screen.getByText(/inserir/i)).toBeInTheDocument();
  });

  it('should render with img', () => {
    renderTheme(
      <Button icon={<AddIcon data-testid="icon" />} bgcolor="red" color="white">
        Inserir
      </Button>,
    );
    expect(screen.getByText(/inserir/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
