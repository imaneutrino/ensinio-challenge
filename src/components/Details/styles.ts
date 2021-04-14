import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 110px auto;
`;

export const HeadingGroup = styled.div`
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      &:nth-child(1) {
        font-family: 'Livvic';
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--color-darkPurple);
        &::before {
          display: inline-block;
          content: '';
          border-top: 1px solid var(--color-lightPurple);
          width: 40px;
          margin: 0 1rem;
          transform: translateY(-0.25rem);
        }
      }
      &:nth-child(2) {
        font-family: 'Inter';
        color: var(--color-lightGrey);
      }
    }
  }

  h2 {
    margin-top: 1rem;
    font-family: 'Livvic';
    font-size: 2rem;
    color: var(--color-darkGrey);
  }
`;
