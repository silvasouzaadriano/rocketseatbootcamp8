import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  background: #000;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const ContainerLogo = styled.TouchableOpacity``;

export const ImageLogo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  border-radius: 4px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  border-radius: 9px;
  padding: 2px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  overflow: hidden;
`;
