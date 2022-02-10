import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #2980b9;
  padding-top: ${Platform.OS === 'ios' ? 56 : 40}px;
  padding-bottom: ${Platform.OS === 'ios' ? 20 : 16}px;
  padding-horizontal: 18px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Number = styled.Text`
  color: #fff;
  font-size: 20px;
`;
