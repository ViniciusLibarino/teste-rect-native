import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Content, Button, ContainerIcons, Divider } from './styles';

export const Product = ({ item, editItem, removeItem, toggleItemToBuy }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [productNewValue, setProductNewValue] = useState(item.title);
  const textInputRef = useRef(null);

  function handleStartEditing() {
    setIsEditing(true);
  }

  function handleCancelEditing() {
    setProductNewValue(item.title);
    setIsEditing(false);
  }

  function handleSubmitEditing() {
    editItem({ itemId: item.id, itemNewTitle: productNewValue });
    setIsEditing(false);
  }

  useEffect(() => {
    if (textInputRef.current) {
      if (isEditing) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isEditing]);

  return (
    <Container>
      <Content>
        <Button activeOpacity={0.7} onPress={() => toggleItemToBuy(item.id)}>
          <View style={item.buy ? styles.taskMarkerBuy : styles.taskMarker}>
            {item.buy && <Icon name="check" size={20} color="#fff" />}
          </View>
        </Button>

        <TextInput
          ref={textInputRef}
          style={item.buy ? styles.taskTextBuy : styles.taskText}
          value={productNewValue}
          editable={isEditing}
          onChangeText={setProductNewValue}
          onSubmitEditing={handleSubmitEditing}
        />
      </Content>

      <ContainerIcons>
        {isEditing ? (
          <Button onPress={handleCancelEditing}>
            <Icon name="x" size={24} color="#b2b2b2" />
          </Button>
        ) : (
          <Button onPress={handleStartEditing}>
            <Icon name="edit-2" size={20} color="#b2b2b2" />
          </Button>
        )}

        <Divider />

        <Button onPress={() => removeItem(item.id)} disabled={isEditing}>
          <Icon
            name="trash-2"
            size={20}
            color={isEditing ? '#b2b2b2' : '#ff8888'}
            style={{ opacity: isEditing ? 0.3 : 1 }}
          />
        </Button>
      </ContainerIcons>
    </Container>
  );
};

const styles = StyleSheet.create({
  taskMarker: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#6e6e6e',
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    color: '#6e6e6e',
    fontSize: 16,
  },
  taskMarkerBuy: {
    height: 20,
    width: 20,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTextBuy: {
    fontSize: 16,
    color: '#1DB863',
    textDecorationLine: 'line-through',
  },
});
