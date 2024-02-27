import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { styledProps } from './@types';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardTradeContainer = styled(GenericContainer)<styledProps>`
  gap: 20px;
  ${media.lessThan('large')`
    flex-wrap: wrap;
    height: auto;
    > div:first-child {
      width: 100%;
    }
    div {
      height: auto;
    }
    > img {
      width: 38px;
    }
    > button:last-child {
      width: 70%;
    }
  `}
`;
export const Logo = styled.div`
  gap: 5px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
`;
export const Container = styled(GenericContainer)<styledProps>`
  width: auto;
  align-items: flex-start;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};

  ${({ larger }) =>
    larger &&
    css`
      width: 100%;
      justify-content: space-between;
    `};
`;
export const Title = styled.h2<styledProps>`
  width: 100%;
  line-height: 30px;
  letter-spacing: 1px;
  text-align: ${({ isEnd }) => (isEnd ? 'end' : 'start')};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};

  ${({ blue }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.palette.color.blue?.light};
    `};
  ${({ dark }) =>
    dark &&
    css`
      color: ${({ theme }) => theme.palette.color.gray?.light};
    `};
`;
export const Content = styled(GenericContainer)`
  align-items: center;
  justify-content: space-between;
  ${media.lessThan('large')`
    gap: 20px 0px;
    flex-wrap: wrap;
  `}
`;
export const Info = styled.div`
  ${media.lessThan('large')`
    flex: 1 1 50%;
    display: flex;
    min-width: 120px;
    max-width: 200px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `}
`;
export const Text = styled.p<styledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 200};
  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.palette.color.regular};
    `};
  ${({ blue, dark }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.palette.color.blue?.light};
      ${dark &&
      css`
        color: ${({ theme }) => theme.palette.color.gray?.light};
      `};
    `};
`;

export const Img = styled.img<styledProps>`
  width: ${({ size }) => size || '58px'};
`;

export const ContainerButtons = styled(Container)`
  gap: 10px;
  button:last-child {
    min-width: 200px;
    font-size: ${({ theme }) => theme.typography.fontSize}rem;
  }
  ${media.lessThan('large')`
    flex-wrap: wrap;
    justify-content: flex-start;
  `}
`;
export const Button = styled.button<styledProps>`
  height: 48px;
  border: none;
  cursor: pointer;
  flex: 1 1 140px;
  padding: 10px 18px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.color.white?.medium};

  ${({ dark }) =>
    dark &&
    css`
      background-color: #3d3757;
      p {
        color: ${({ theme }) => theme.palette.color.white?.light};
      }
    `};
`;
