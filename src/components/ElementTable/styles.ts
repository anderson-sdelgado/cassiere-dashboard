import styled, { css } from 'styled-components';
import { ElementTableProps } from '.';

export type ElementWrapperProps = { isImg: boolean; isID: boolean } & Pick<
  ElementTableProps,
  'title'
>;

const wrapperModifiers = {
  id: () => css`
    padding-left: 0;
    text-align: center;
    width: 5%;
  `,
  image: () => css`
    padding-left: 0;
    text-align: center;
    & img {
      height: 10rem;
    }
  `,
};

export const ElementWrapper = styled.td<ElementWrapperProps>`
  ${({ theme, title, isImg, isID }) => css`
    padding-left: ${theme.spacings.xsmall};
    ${isID && wrapperModifiers.id()}
    ${isImg && wrapperModifiers.image()}
  `}
`;
