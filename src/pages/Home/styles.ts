import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;

  background: rgb(95, 65, 217);
  background: linear-gradient(
    128deg,
    rgba(95, 65, 217, 1) 0%,
    rgba(65, 181, 217, 1) 100%
  );

  @media (max-width: 767.98px) {
    padding: 0 5px;
  }
`;

export const IconsContainer = styled.div`
  position: relative;
  max-width: 1370px;
  margin: 0 auto;

  @media (max-width: 767.98px) {
    display: none;
  }
  img {
    position: absolute;
    &:nth-child(1) {
      margin-top: 2.5%;
      left: 0.25%;
    }
    &:nth-child(2) {
      top: 0;
      left: 25%;
    }
    &:nth-child(3) {
      margin-top: 5%;
      left: 45.5%;
    }
    &:nth-child(4) {
      top: 2%;
      left: 72%;
    }
    &:nth-child(5) {
      margin-top: 3%;
      right: 2.5%;
    }
  }
`;
