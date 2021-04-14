import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { BiRocket } from 'react-icons/bi';

import { Container, Footer, FooterLeft, FooterRight } from './styles';

const DetailsFooter: React.FC = () => {
  return (
    <Container>
      <hr />

      <Footer>
        <FooterLeft>
          <BiRocket />{' '}
          <span>Veja todos os outros recursos disponíveis para te ajudar </span>
        </FooterLeft>
        <FooterRight>
          <span> Ver mais </span> <BsArrowRight />
        </FooterRight>
      </Footer>
    </Container>
  );
};

export default DetailsFooter;
