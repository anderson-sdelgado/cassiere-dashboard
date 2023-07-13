import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: row wrap;
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.minmedium};
    font-weight: 500;
  `}
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`;

export const Login = styled.div``;
