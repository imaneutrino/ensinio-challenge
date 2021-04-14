import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  --webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 76.25rem;
  margin: 0 auto;
  padding: 1.7rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767.98px) {
    padding: 1rem 5px;
  }

  .active {
    display: block;
  }

  .logo {
    width: 10rem;
    height: 2.5rem;

    @media (max-width: 767.98px) {
      width: 7rem;
      height: 3rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .toggleMenu {
    display: none;
    background: none;
    border: none;
    svg {
      width: 40px;
      height: 40px;
      color: var(--color-white);
      img {
        width: 40px;
        height: 40px;
      }
    }
    @media (max-width: 767.98px) {
      display: block;
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  width: 70%;

  @media (max-width: 767.98px) {
    display: none;
  }

  a {
    color: var(--color-white);
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    display: flex;
    align-items: center;
  }
`;

export const SolutionsDropdown = styled.div`
  display: none;
  position: absolute;
  padding: 2rem;
  width: 650px;
  background: var(--color-white);
  border-radius: 5px;
  top: 20px;
  z-index: 1;
  cursor: initial;
  transition: display 0.6s;

  h3 {
    color: var(--color-darkPurple);
    font-family: 'Livvic';
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
`;

export const SolutionsDropdownItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  width: 50%;
  img {
    margin-right: 1rem;
  }
  div strong {
    color: var(--color-black);
    font-family: 'Livvic';
    font-weight: bolder;
  }
  div p {
    color: var(--color-black);
    font-family: 'Inter';
  }
`;

export const LeftNavItem = styled.div`
  display: flex;
  li {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  .dropdown-leftNav {
    position: relative;
    &:hover ${SolutionsDropdown} {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const LanguagesDropdown = styled.div`
  position: absolute;
  right: 0;
  display: none;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 5px;
  width: 135px;
  p {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    span {
      margin: 0 22px 0 10px;
      font-family: Inter;
      color: var(--color-darkGrey);
    }
    svg {
      color: green;
    }
  }

  .active {
    background: linear-gradient(
      128deg,
      rgba(95, 65, 217, 0.1) 0%,
      #ffffff 100%
    );
  }
`;

export const RightNavItem = styled.div`
  ul {
    display: flex;
    align-items: center;
  }
  button {
    margin: 0 40px;
    background: none;
    border: 1px solid var(--color-white);
    border-radius: 50px;
    color: var(--color-white);
    padding: 10px 15px;
  }

  .dropdown-rightNav {
    position: relative;
    &:hover ${LanguagesDropdown} {
      display: flex;
    }
  }
`;

export const Separator = styled.div`
  height: 32px;
  border: 1px solid var(--color-lightGreen);
  opacity: 0.2;
  margin: 0 48px;
`;
