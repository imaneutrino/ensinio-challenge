import { useState, useEffect } from 'react';

import api from '../../../services/api';

import { Container, BoxItem } from './styles';

import Icon1 from '../../../assets/images/icon-trails.svg';
import Icon2 from '../../../assets/images/icon-playlist.svg';
import Icon3 from '../../../assets/images/icon-folder.svg';

const icons = ['', Icon1, Icon2, Icon3];

interface ItemsInterface {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const DetailsItem: React.FC = () => {
  const [items, setItems] = useState<ItemsInterface[]>([]);

  useEffect(() => {
    async function getItems() {
      const response = await api.get('items');
      setItems(response.data);
    }
    getItems();
  }, []);

  return (
    <Container>
      {items.map(item => (
        <BoxItem key={item.id}>
          <img src={icons[item.id]} alt={item.title} />
          <div>
            <h3> {item.title} </h3>
            <p>{item.description}</p>
          </div>
        </BoxItem>
      ))}
    </Container>
  );
};

export default DetailsItem;
