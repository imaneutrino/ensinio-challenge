import { Container, LeftContent, RightContent } from './styles';

import DevicesIcon from '../../assets/images/devices.svg';
import PlayIcon from '../../assets/images/play.svg';
import ManImage from '../../assets/images/man.png';

const MainContent: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <hgroup>
          <h2>
            <img src={DevicesIcon} alt="Devices icon" /> plataforma all in one{' '}
          </h2>
          <h1> Sua escola online poderosa e lucrativa </h1>
        </hgroup>
        <p>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sistema EAD completo.
        </p>
        <div>
          <button type="button">Começar agora</button>
          <button type="button">
            <img src={PlayIcon} alt="Play icon" />
            Ver vídeo
          </button>
        </div>
      </LeftContent>
      <RightContent>
        <img src={ManImage} alt="Man showing content" />
      </RightContent>
    </Container>
  );
};

export default MainContent;
