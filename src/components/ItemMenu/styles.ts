import styled, { css } from 'styled-components';

type ItemProps = {
  isSubItem?: boolean;
};

export const ItemWrapper = styled.li<ItemProps>`
  ${({ theme, isSubItem }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    padding-left: ${isSubItem ? theme.spacings.medium : theme.spacings.small};
  `}
`;
