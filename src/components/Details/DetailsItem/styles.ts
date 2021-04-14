import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 67px;

  @media (max-width: 767.98px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const BoxItem = styled.article`
  width: 33.3%;

  @media (max-width: 767.98px) {
    width: 100%;
    margin: 20px 0;
  }

  &:nth-child(2) {
    margin: 0 152px;
  }

  img {
    margin-bottom: 24px;
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
