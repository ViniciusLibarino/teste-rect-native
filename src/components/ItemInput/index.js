import React, { useState } from 'react';
import { Container, Input, ButtonAdd } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export const ItemInput = ({ addItem }) => {
  const [item, setItem] = useState('');

  function handleAddNewItem() {
    if (!item) return;

    addItem(item);
    setItem('');
  }
  return (
    <Container>
      <Input
        placeholder="Novo item da lista"
        placeholderTextColor="#9e9e9e"
        returnKeyType="send"
        selectionColor="#666666"
        value={item}
        onChangeText={setItem}
        onSubmitEditing={handleAddNewItem}
      />
      <ButtonAdd
        onPress={addItem}
        activeOpacity={0.7}
        onPress={handleAddNewItem}
      >
        <Icon name="plus" size={24} color="#6e6e6e" />
      </ButtonAdd>
    </Container>
  );
};
