import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ItemWrapper } from '../ItemWrapper';
import { Container, TextEmpty, Content, Button } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export const ItemsList = ({ items, toggleItemToBuy, removeItem, editItem }) => {
  if (items.length === 0) {
    return (
      <Container>
        <TextEmpty>Nenhum item na lista</TextEmpty>
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
            <Content>
              <Button
                activeOpacity={0.7}
                onPress={() => toggleItemToBuy(item.id)}
              >
                <View
                  style={item.buy ? styles.taskMarkerBuy : styles.taskMarker}
                >
                  {item.buy && <Icon name="check" size={20} color="#fff" />}
                </View>
              </Button>

              <Text style={item.buy ? styles.taskTextBuy : styles.taskText}>
                {item.title}
              </Text>
            </Content>

            <Button onPress={() => removeItem(item.id)}>
              <Icon name="trash-2" size={20} color="#ff8888" />
            </Button>
          </ItemWrapper>
        );
      }}
    />
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
