import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const WrapperInput = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 10fr;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: ${theme.spacings.small};
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

export const WrapperGallery = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 3rem;
    margin: ${theme.spacings.xsmall};
  `}
`;
