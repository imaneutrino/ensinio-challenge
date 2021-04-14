import Navbar from '../../components/Navbar';
import MainContent from '../../components/MainContent';
import Details from '../../components/Details';

import { Container, IconsContainer } from './styles';

import PlaylistsIcon from '../../assets/images/icon-playlists.svg';
import PlaylistsIcon2 from '../../assets/images/icon-playlists2.svg';
import Certified from '../../assets/images/icon-certified.svg';
import TranscriptionIcon from '../../assets/images/icon-transcription.svg';
import PlaylistsIcon3 from '../../assets/images/icon-playlists3.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <IconsContainer>
        <img src={PlaylistsIcon} alt="Ícone de certificado" />
        <img src={PlaylistsIcon3} alt="Ícone de certificado" />
        <img src={Certified} alt="Ícone de certificado" />
        <img src={TranscriptionIcon} alt="Ícone de certificado" />
        <img src={PlaylistsIcon2} alt="Ícone de certificado" />
      </IconsContainer>
      <Navbar />
      <MainContent />
      <Details />
    </Container>
  );
};

export default Home;
