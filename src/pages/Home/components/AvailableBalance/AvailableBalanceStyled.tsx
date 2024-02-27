import styled, { css } from 'styled-components';
import media from 'styles/breakpoints';
import { StyledProps } from '../@types';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const AvailableBalanceContainer = styled(GenericContainer)`
  gap: 20px;
  flex-direction: column;
`;
export const Container = styled(GenericContainer)<StyledProps>`
  gap: 5px;
  padding: 0;
  height: ${({ size }) => size || 'auto'};
  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `};
  ${({ isWrap }) =>
    isWrap &&
    css`
      flex-wrap: wrap;
      > button {
        flex: 1 1 45%;
      }
    `};
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: center;
      justify-content: space-between;
    `};
`;
export const Title = styled.h2<StyledProps>`
  width: auto;
  font-size: ${({ size }) => size || '20px'};
`;
export const Img = styled.img<StyledProps>`
  width: ${({ size }) => size || '30%'};
`;
export const Token = styled(GenericContainer)`
  padding: 0;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;
export const Logo = styled.div<StyledProps>`
  gap: 5px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
`;
export const Balance = styled(GenericContainer)`
  gap: 5px;
  padding: 0;
  width: auto;
  height: auto;
`;
export const Text = styled.p<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  ${({ blue, dark }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.palette.color.blue?.regular};
      font-weight: ${({ theme }) => theme.typography.fontWeightLight};
      ${dark &&
      css`
        color: ${({ theme }) => theme.palette.color.gray?.light};
      `};
    `};

  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.palette.color.regular};
    `};

  ${({ isLow }) =>
    isLow &&
    css`
      color: ${({ theme }) => theme.palette.color.red};
    `};
`;
export const Card = styled.div<StyledProps>`
  width: 106px;
  height: 48px;
  display: flex;
  flex: 1 1 20%;
  outline: none;
  cursor: pointer;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  background-color: rgba(73, 73, 73, 0);
  color: ${({ theme }) => theme.palette.color.gray?.medium};
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  border: 2px solid ${({ theme }) => theme.palette.color.gray?.light};

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.palette.color.blue?.default};
      border: 2px solid ${({ theme }) => theme.palette.color.blue?.default};
    `};
`;
export const Switch = styled.button<StyledProps>`
  width: 110px;
  height: 38px;
  border: none;
  padding: 5px;
  display: flex;
  cursor: pointer;
  /* margin-right: 40px; */
  position: relative;
  max-height: 35.5px;
  align-items: center;
  border-radius: 100px;
  justify-content: space-between;
  transition: background-color 0.2s;
  background-color: 2px solid
    ${({ theme }) => theme.palette.color.white?.regular};
  background-color: ${({ theme }) => theme.palette.color.white?.medium};
  > div {
    left: 5px;
    width: 23px;
    height: 23px;
    position: absolute;
    border-radius: 100%;
    transition: left 0.2s ease-out;
    background-color: ${({ theme }) => theme.palette.color.blue?.light};
  }

  ${({ dark }) =>
    dark &&
    css`
      background-color: 2px solid
        ${({ theme }) => theme.palette.color.white?.regular};
      background-color: ${({ theme }) => theme.palette.color.blue?.dark};
      > div {
        background-color: ${({ theme }) => theme.palette.color.blue?.default};
      }
    `};
  ${({ isActive }) =>
    isActive &&
    css`
      > div {
        left: 73%;
      }
    `};

  ${({ isActive }) => media.lessThan('large')`
    width: 80px;
    margin: 0px;
    ${
      isActive &&
      css`
        > div {
          left: 65%;
        }
      `
    }
  `}
`;
