import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';
import media from 'styled-media-query';

export type WrapperProps = { hasIcon: boolean };

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2.4rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    background: green;
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('large')`
      width: 50%
    `}

    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
  `}
`;
