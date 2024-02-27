import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { StyleProps } from './@types';

export const HeaderContainer = styled.div`
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 18px 22px;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('large')`
    gap: 8px;
    padding: 10px 20px;

  `}
`;
export const Logo = styled.h1`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;
export const Span = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
`;
export const ContentRoutes = styled.div`
  width: 40%;
  height: 100%;
  background: black;
`;
export const Container = styled.div<StyleProps>`
  width: auto;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerTheme = styled.div`
  gap: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.h2<StyleProps>`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
export const SubContainer = styled.div`
  gap: 10px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  > button {
    width: 120px;
    height: 38px;
  }
`;
export const Icon = styled.img`
  width: 40px;
`;
export const ContainerSearch = styled.div<StyleProps>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      position: absolute;
    `};
  > div:first-child {
    gap: 10px;
    z-index: 1;
    width: 100%;
    height: auto;
    display: flex;
    padding: 10px 5px;
    position: absolute;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.color.light};
    > button {
      font-size: 10px;
    }
    ${({ dark }) =>
      dark &&
      css`
        background-color: ${({ theme }) => theme.palette.color.blue?.medium};
      `};
  }
`;
export const Shadow = styled.div<StyleProps>`
  top: 0px;
  width: 100%;
  height: 100vh;
  position: absolute;
  background: #00000096;
`;
export const IconSearch = styled(Icon)<StyleProps>`
  width: 20px;
  filter: invert(1);
  ${({ dark }) =>
    dark &&
    css`
      filter: invert(0);
    `};
`;
export const Menu = styled.div<StyleProps>`
  gap: 6px;
  width: 22px;
  height: auto;
  display: flex;
  cursor: pointer;
  position: relative;
  flex-direction: column;

  ${media.greaterThan('large')`
    display: none;
  `}
`;
export const ContainerWallet = styled.div<StyleProps>`
  width: 95%;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  > div:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  ${({ isOpen }) => media.greaterThan('large')`
    display: none;
    ${
      isOpen &&
      css`
        display: block;
      `
    };
  `}
`;
export const Content = styled.div<StyleProps>`
  width: 100%;
  height: auto;
  min-height: 230px;
  border-radius: 12px;
  border: 1px solid #3e384f;
`;
export const Header = styled.div<StyleProps>`
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px 10px 0px 15px;
  justify-content: space-between;
  svg {
    width: 15px;
  }
  ${({ dark }) =>
    dark &&
    css`
      svg {
        fill: #ffffff;
      }
    `};
`;
export const Title = styled.h2<StyleProps>`
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;
export const Line = styled.span<StyleProps>`
  width: 100%;
  height: 2px;
  display: flex;
  background-color: ${({ theme }) => theme.palette.color.black};

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.palette.color.light};
    `};
`;
export const Mobile = styled.div<StyleProps>`
  > h1 img {
    margin-right: 5px;
  }
  background-color: #00000096;
  ${({ dark, isOpen }) => media.lessThan('large')`
    top: 0px;
    z-index: 2;
    width: 100%;
    right: -100%;
    height: 100%;
    display: flex;
    position: fixed;
    justify-content: flex-end;
    > div {
      width: 80%;
      height: 100%;
      right: -100%;
      display: flex;
      position: absolute;
      padding-bottom: 20px;
      flex-direction: column;
      justify-content: space-between;
      transition: right 0.3s ease-out;
      background-color: ${({ theme }) => theme.palette.background.light};
      ${
        dark &&
        css`
          background-color: ${({ theme }) => theme.palette.background.default};
        `
      };
    }
    ${
      isOpen &&
      css`
        right: 0;
        > div {
          right: 0;
          transition: right 0.3s ease-out;
        }
      `
    };
  `}
`;
export const SubContent = styled.div``;
export const Footer = styled.div`
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
`;
