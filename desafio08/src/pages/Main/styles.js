import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #000;
`;

export const ItemContainer = styled.View`
  width: 220px;
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
`;

export const ImageProducts = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50px;
  border-radius: 5px;
  background: #7159c1;
  align-items: center;
  flex-direction: row;
  margin-top: auto;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin: auto;
`;

export const InfoButton = styled.View`
  height: 50px;
  width: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  background: ${darken(0.03, '#7159c1')};
`;

export const InfoButtonText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
