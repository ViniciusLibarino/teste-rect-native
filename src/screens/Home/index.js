import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Header } from '../../components/Header';
import { ItemInput } from '../../components/ItemInput';
import { ItemsList } from '../../components/ItemsList';
import { Container } from './styles';

export const Home = () => {
  const [items, setItems] = useState([]);

  function handleAddItem(newItemTitle) {
    const itemWithSameTitle = items.find((item) => item.title === newItemTitle);
    if (itemWithSameTitle) {
      return Alert.alert(
        'O item já existe na lista',
        'Você não pode cadastrar dois itens com o mesmo nome.'
      );
    }

    const newItem = {
      id: new Date().getTime(),
      title: newItemTitle,
      buy: false,
    };

    setItems((oldItems) => [...oldItems, newItem]);
  }

  function handleToggleItemToBuy(id) {
    const updatedItems = items.map((item) => ({ ...item }));

    const foundItem = updatedItems.find((item) => item.id === id);

    if (!foundItem) return;

    foundItem.buy = !foundItem.buy;
    setItems(updatedItems);
  }

  function handleRemoveItem(id) {
    Alert.alert('Remover Item', 'Tem certeza que deseja remover esse item?', [
      {
        style: 'cancel',
        text: 'Não',
      },
      {
        style: 'destructive',
        text: 'Sim',
        onPress: () => {
          const updateItems = items.filter((item) => item.id !== id);

          setItems(updateItems);
        },
      },
    ]);
  }

  function handleEditItem(id, newTitle) {
    const updatedItems = items.map((item) => ({ ...item }));

    const itemToBeUpdated = updatedItems.find((item) => item.id === id);

    if (!itemToBeUpdated) return;

    itemToBeUpdated.title = newTitle;
    setItems(updatedItems);
  }

  return (
    <Container>
      <Header ItemsCounter={items} />
      <ItemsList
        items={items}
        toggleItemToBuy={handleToggleItemToBuy}
        removeItem={handleRemoveItem}
        editItem={handleEditItem}
      />
      <ItemInput addItem={handleAddItem} />
    </Container>
  );
};
