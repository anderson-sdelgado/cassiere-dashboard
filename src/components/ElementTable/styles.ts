import styled, { css } from 'styled-components';
import { ElementTableProps } from '.';

export type ElementWrapperProps = { isImg: boolean; isID: boolean };

const wrapperModifiers = {
  id: () => css`
    padding-left: 0;
    text-align: center;
    width: 5%;
  `,
  img: () => css`
    padding-left: 0;
    text-align: center;
    & img {
      height: 10rem;
    }
  `,
};

export const ElementWrapper = styled.td<Pick<ElementTableProps, 'type'>>`
  ${({ theme, type }) => css`
    padding-left: ${theme.spacings.xsmall};
    ${type !== 'regular' && wrapperModifiers[type]()}
  `}
`;
