import styled, { css } from 'styled-components';

export const RowWrapper = styled.tr`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const ElementWrapper = styled.th`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
  `}
`;
