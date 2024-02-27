import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { Props } from './@types';

export const WalletContainer = styled.div<Props>`
  top: -100%;
  opacity: 0;
  right: 0px;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  background-color: #050c238f;
  svg {
    top: 10px;
    z-index: 1;
    right: 10px;
    width: 15px;
    display: none;
    position: absolute;
  }
  ${({ dark }) =>
    dark &&
    css`
      background-color: #00000059;
      svg {
        fill: #ffffff;
      }
    `};
  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 0px;
      opacity: 1;
      transition: opacity 0.3s ease-out;
    `};
  ${({ isOpen }) => media.lessThan('large')`
    width: 100%;
    height: auto;
    display: none;
    position: initial;
    background-color: transparent;
    ${
      isOpen &&
      css`
        display: block;
      `
    };
  `}
`;
export const Content = styled.div<Props>`
  top: 90px;
  right: 50px;
  width: 100%;
  height: 566px;
  display: flex;
  max-width: 518px;
  position: absolute;
  padding: 18px 22px;
  border-radius: 15px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: right 0.3s ease-out 0s;
  background-color: ${({ theme }) => theme.palette.color.white?.light};

  > div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  ::before {
    width: 0;
    height: 0;
    top: -11px;
    right: 30px;
    content: '';
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid ${({ theme }) => theme.palette.color.white?.light};
  }
  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.background.medium};
      ::before {
        border-bottom: 13px solid
          ${({ theme }) => theme.palette.background.medium};
      }
    `};
  ${({ notConected }) =>
    notConected &&
    css`
      justify-content: center;
    `};

  ${media.lessThan('large')`
    width: 100%;
    height: auto;
    padding: 10px;
    position: initial;
    border-radius: 12px;
    background-color: transparent;
    ::before {
      content: none;
    }
  `}
`;
export const Title = styled.h2<Props>`
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    `};
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
export const Status = styled.span<Props>`
  margin-top: 5px;
  margin-bottom: 35px;
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.palette.color.gray?.light};
    `};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
export const Token = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  > div {
    gap: 10px;
    display: flex;
    align-items: center;
    h2 {
      font-size: ${({ theme }) => theme.typography.fontSize}rem;
    }
  }
`;
export const Icon = styled.img`
  width: 30px;
`;

export const Header = styled.div<Props>`
  left: 0;
  top: 0px;
  width: 100%;
  height: auto;
  padding: 10px;
  position: absolute;
  justify-content: space-between;
`;
