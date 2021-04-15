import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-width: 94%;
  margin: 0 auto;
  padding-top: 106px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
  }

  @media (min-width: 993px) {
    text-align: center;
    align-items: flex-end;
  }
`;

export const LeftContent = styled.article`
  width: 45%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-family: 'Livvic';
    font-size: 0.94rem;
    text-transform: uppercase;
    color: var(--color-white);
    letter-spacing: 3px;

    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      justify-content: center;
    }

    img {
      margin-right: 16px;
    }
  }

  h1 {
    font-family: 'Inter';
    color: var(--color-white);
    margin-top: 44px;
    font-size: 2.5em;
  }

  p {
    font-family: 'Inter';
    font-size: 1rem;
    color: var(--color-white);
    margin-top: 44px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 44px;

    @media (max-width: 992px) {
      flex-direction: column;
    }
    button {
      height: 56px;
      width: 180px;
      border-radius: 50px;

      @media (max-width: 992px) {
        width: 80%;
        margin: 10px 0;
        font-size: 1.5rem;
        height: 70px;
      }

      &:nth-child(1) {
        background-color: var(--color-lightGreen);
        border: none;
        color: var(--color-darkGrey);
        font-family: 'Inter';
        font-weight: 600;

        &:hover {
          background: ${darken(0.08, '#00E1E7')};
        }
      }
      &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: initial;
        border: none;
        color: var(--color-white);
        font-weight: 600;
        img {
          margin-right: 8px;
        }
      }
    }
  }
`;

export const RightContent = styled.article`
  width: 50%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
