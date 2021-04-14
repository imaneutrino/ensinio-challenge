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
`;
export const FooterLeft = styled.footer`
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-weight: bold;
  svg {
    color: var(--color-lightPurple);
    font-weight: bolder;
    margin-right: 2rem;
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
`;
