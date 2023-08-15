import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';

export const wrapperModifiers = {
  inline: () => css`
    display: grid;
    grid-template-columns: 1fr 11fr;
    align-items: center;
    text-align: center;
    gap: 3rem;
  `,
  column: () => css`
    display: flex;
    flex-direction: column;
  `,
};

export const Wrapper = styled.div<Pick<TextFieldProps, 'display'>>`
  ${({ display }) => css`
    ${!!display && wrapperModifiers[display]()}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    margin-right: ${theme.spacings.small};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall};
  `}
`;
