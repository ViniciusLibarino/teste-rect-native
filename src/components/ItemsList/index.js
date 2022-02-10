import React from 'react';
import { FlatList } from 'react-native';
import { ItemWrapper } from '../ItemWrapper';
import { Product } from '../Product';
import { Container, Text } from './styles';

export const ItemsList = ({ items, toggleItemToBuy, removeItem, editItem }) => {
  if (items.length === 0) {
    return (
      <Container>
        <Text>Nenhum item na lista</Text>
      </Container>
    );
  }
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <ItemWrapper>
            <Product
              item={item}
              toggleItemToBuy={toggleItemToBuy}
              removeItem={removeItem}
              editItem={editItem}
            />
          </ItemWrapper>
        );
      }}
    />
  );
};
