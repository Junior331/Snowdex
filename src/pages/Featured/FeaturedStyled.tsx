import styled, { css } from 'styled-components';

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px 25px 35px;
  justify-content: flex-start;
`;
export const FeaturedContainer = styled(GenericContainer)`
  gap: 20px;
  flex-direction: column;
`;
export const Container = styled(GenericContainer)`
  gap: 20px;
  padding: 0;
  flex-direction: column;
  > div:last-child {
    margin-bottom: 20px;
  }
`;
