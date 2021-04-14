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

  @media (max-width: 767.98px) {
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
  @media (max-width: 767.98px) {
    width: 100%;
    justify-content: center;
  }

  svg {
    color: var(--color-lightPurple);
    font-weight: bolder;
    margin-right: 2rem;

    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

export const FooterRight = styled.footer`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-weight: bold;
  span {
    color: var(--color-darkPurple);
    margin-right: 2rem;
  }

  @media (max-width: 767.98px) {
    margin-top: 10px;
  }
`;
