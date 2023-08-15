import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { ButtonProps } from '.';

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'bgColor' | 'ftColor'
>;

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, bgColor, ftColor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    background: ${bgColor};
    color: ${ftColor};
    border: 0.1rem solid #ddd;
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
