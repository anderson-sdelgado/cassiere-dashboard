import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${theme.spacings.small} 0;
  `}
`;

export const TextFind = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    margin-right: ${theme.spacings.small};
  `}
`;

export const InputFind = styled.input`
  ${({ theme }) => css`
    flex-grow: 1;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall};
  `}
`;
