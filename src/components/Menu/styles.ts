import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const MenuWrapper = styled.nav`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    padding-top: ${theme.spacings.small};
    height: calc(100vh - 4rem);
    background-color: ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`;

export const UnorderedList = styled.ul``;

export const ItemList = styled.li``;
