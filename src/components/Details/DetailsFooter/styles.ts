import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 40px auto;
`;

export const Footer = styled.footer`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    margin: 10px 0;
  }
`;

export const FooterLeft = styled.footer`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-weight: bold;
  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
    font-size: 1.3rem;
  }

  svg {
    color: var(--color-lightPurple);
    font-weight: bolder;
    margin-right: 2rem;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const FooterRight = styled.footer`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-weight: bold;
  cursor: pointer;
  &:hover svg {
    transform: translateX(5px);
  }
  @media (max-width: 992px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  span {
    color: var(--color-darkPurple);
    @media (max-width: 992px) {
      margin-right: 1.5rem;
    }
  }
  svg {
    margin: 0 1.6rem;
    color: var(--color-darkPurple);
    transition: 0.3s;
  }
`;
