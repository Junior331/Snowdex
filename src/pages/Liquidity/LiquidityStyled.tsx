import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { Props } from './@types';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 5px 25px 15px;
  justify-content: center;

  ${media.lessThan('large')`
    padding: 20px 15px 35px;
  `}
`;
export const LiquidityContainer = styled(GenericContainer)<Props>`
  gap: 0px;
  flex-wrap: wrap;
  align-content: flex-start;

  button {
    height: 68px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.fontSize + 0.2}rem;
  }
  > div:last-child {
    height: 100%;
    max-width: 1429px;
    max-height: 420px;
    > div:nth-child(2) {
      gap: 0px;
      margin-top: 10px;
      align-items: flex-start;
      justify-content: flex-start;
      > div {
        h2 {
          ${({ dark }) =>
            dark &&
            css`
              color: #8a8694;
            `};
        }
      }
      > div:last-child {
        > div {
          padding: 10px 0px;
          border-radius: 6px;
          &:hover {
            background-color: #d7e1f3;
          }
          ${({ dark }) =>
            dark &&
            css`
              &:hover {
                background-color: #3e3758;
              }
            `};
        }
      }
    }
  }
  ${media.lessThan('large')`
    > div:last-child {
      max-height: 390px;
      > div:nth-child(2) {
        overflow: auto;
        max-width: 100%;
        > div {
          max-width: 100%;
          min-width: 870px;
        }
      }
    }
  `}
`;
export const Container = styled(GenericContainer)<Props>`
  gap: 15px;
  padding: 0;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  flex: ${({ flex }) => flex};
  width: ${({ width }) => width};

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #a8a8a8;
  }
  margin: ${({ margin }) => margin}!important;
  padding: ${({ padding }) => padding};

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      height: auto;
    `};
  ${({ isSecondary }) => media.lessThan('small')`
    max-height: auto;
    ${
      isSecondary &&
      css`
        flex: none;
        max-height: auto;
      `
    };
  `}
`;
export const Title = styled.h2<Props>`
  width: 100%;
  letter-spacing: 1px;
  font-size: ${({ size, theme }) =>
    size || theme.typography.fontSizeRegular + 0.7}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  ${({ small, theme }) =>
    small &&
    css`
      font-weight: ${theme.typography.fontWeightLight};
    `}
`;

export const Text = styled.p<Props>`
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
  ${({ dark }) =>
    dark &&
    css`
      color: #9c99a5;
    `};
  ${({ isSecondary }) =>
    isSecondary &&
    css`
      max-width: 380px;
      text-align: center;
      font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 100};
    `};
  ${({ isSecondary }) => media.lessThan('large')`
    ${
      isSecondary &&
      css`
        margin: 20px 0;
      `
    };
  `}
`;
export const ContentText = styled(GenericContainer)`
  gap: 5px;
  padding: 0;
  height: auto;
  justify-content: flex-start;
  p {
    font-size: ${({ theme }) => theme.typography.fontSizeRegular - 0.2}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 100};
  }
`;
export const ContainerButton = styled(GenericContainer)`
  gap: 25px;
  padding: 0;
  height: auto;
  ${media.lessThan('small')`
    flex-wrap: wrap;
  `}
`;
export const Span = styled.span<Props>`
  font-size: ${({ theme }) => theme.typography.fontSizeRegular - 0.2}rem;
  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.palette.color.gray?.regular};
    `};
`;
export const Content = styled(GenericContainer)<Props>`
  gap: 35px;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  width: ${({ width }) => width};
  > div {
    padding: 18px 50px;
  }
  > div:first-child {
    > div:nth-child(2) {
      height: 68px;
      margin-top: 16px;
      input {
        font-size: 2rem;
      }
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #a8a8a8;
  }
  ${media.lessThan('large')`
    padding: 20px 0px 35px;
    > div {
      gap: 10px;
      padding: 18px 20px;
    }
    > div:first-child {
    > div:nth-child(2) {
      margin-bottom: 16px;
    }
  }
  `}
`;
export const Tr = styled.div<Props>`
  width: 100%;
  display: flex;
  cursor: pointer;
  padding: 5px 0px;
  align-items: center;
  justify-content: space-between;
`;
export const Td = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${({ width }) => width};
`;
export const PaginationWrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  .MuiButtonBase-root,
  .MuiPaginationItem-root {
    display: flex;
    font-weight: 400;
    align-items: center;
    font-family: 'Inter';
    width: 35px !important;
    height: 35px !important;
    justify-content: center;
    background-color: #d7e1f3;
  }
  .MuiPaginationItem-previousNext {
    width: 30px !important;
    height: 30px !important;
  }
  .MuiSvgIcon-root {
    width: 30px;
    border-radius: 50%;
    height: 30px !important;
    background-color: #d7e1f3;
  }

  .MuiPaginationItem-root:hover {
    background-color: #d7e1f3;
  }

  ${({ dark }) =>
    dark &&
    css`
      .MuiButtonBase-root,
      .MuiSvgIcon-root,
      .MuiPaginationItem-root {
        fill: #fff;
        color: #fff;
        background-color: #3f3951;
      }
      .MuiPaginationItem-root:hover {
        background-color: #3f3951;
      }
    `}

  ${media.lessThan('small')`
    .MuiPagination-ul {
      /* gap: 5px; */
      flex-wrap: nowrap;
    }
  `}
`;
