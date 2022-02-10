import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 12px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const ContainerIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  width: 1px;
  height: 24px;
  background-color: #6e6e6e;
  opacity: 0.3;
  margin-horizontal: 12px;
`;
