import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: #2980b9;
  padding-bottom: ${Platform.OS === 'ios' ? 36 : 18}px;
  padding-top: 16px;
  padding-horizontal: 18px;
`;

export const Input = styled.TextInput`
  width: 80%;
  background-color: #fff;
  padding-horizontal: 16px;
  padding-vertical: ${Platform.OS === 'ios' ? 20 : 10}px;
  border-radius: 36px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 15%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 36px;
`;
