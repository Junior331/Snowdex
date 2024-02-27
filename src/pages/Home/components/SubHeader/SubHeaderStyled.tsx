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
export const SubHeaderContainer = styled(GenericContainer)`
  gap: 40px;
  ${media.lessThan('large')`
    height: auto;
    flex-wrap: wrap;
  `}
`;
export const Title = styled.h2<StyledProps>`
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

export const Img = styled.img<StyledProps>`
  width: 27%;
`;
export const Logo = styled.div<StyledProps>`
  gap: 5px;
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
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
export const Text = styled.p<StyledProps>`
  font-size: ${({ theme }) => theme.typography.fontSize}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 200};
  ${({ green }) =>
    green &&
    css`
      color: ${({ theme }) => theme.palette.color.regular};
    `};
`;
