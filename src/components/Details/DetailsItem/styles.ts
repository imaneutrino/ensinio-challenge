import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 67px;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const BoxItem = styled.article`
  width: 33.3%;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;

    width: 100%;
    margin: 20px 0;
  }

  &:nth-child(2) {
    margin: 0 152px;
  }

  img {
    margin-bottom: 24px;
    @media (max-width: 992px) {
      width: 80px;
      height: 80px;
      margin-right: 20px;
    }
  }
  h3 {
    font-family: 'Livvic';
    font-weight: 600;
    margin-bottom: 12px;
  }
  p {
    font-family: 'Inter';
    font-weight: 500;
  }
`;
