import DetailsItem from './DetailsItem';
import DetailsFooter from './DetailsFooter';

import { Container, HeadingGroup } from './styles';

const Details: React.FC = () => {
  return (
    <Container>
      <HeadingGroup>
        <span>
          <p>pensamos em cada detalhe</p>
          <p>Conheça alguns dos nossos recursos ⚡️</p>
        </span>
        <h2>Queremos que o aluno se sinta confortável enquanto aprende</h2>
      </HeadingGroup>
      <DetailsItem />
      <DetailsFooter />
    </Container>
  );
};

export default Details;
