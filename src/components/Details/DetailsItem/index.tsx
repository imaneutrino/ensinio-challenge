import { useState, useEffect } from 'react';

import api from '../../../services/api';

import { Container, BoxItem } from './styles';

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
          <img src={item.icon} alt="" />
          <h3> {item.title} </h3>
          <p>{item.description}</p>
        </BoxItem>
      ))}
    </Container>
  );
};

export default DetailsItem;
