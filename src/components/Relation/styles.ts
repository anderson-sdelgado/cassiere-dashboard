import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    text-align: center;
    gap: 3rem;
  `}
`;
