import React from 'react';
import { Container, Text, Number } from './styles';

export const Header = ({ ItemsCounter }) => {
  //const itemsCounterText = ItemsCounter === 1 ? 'item' : 'items';

  // filter itens done
  const itemsBuy = ItemsCounter.filter((item) => item.buy);

  return (
    <Container>
      <Text>Lista de compras</Text>
      {ItemsCounter == 0 ? null : (
        <Number>
          {itemsBuy.length} / {ItemsCounter.length}
        </Number>
      )}
    </Container>
  );
};
