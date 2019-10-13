import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const ContainerInfo = styled.View`
  background: #cecece;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-radius: 4px;
  margin: auto 15px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  margin: auto 10px;
  border: 1px solid #cecece;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  font-size: 20px;
  text-align: center;
  background: #fff;
  height: 40px;
  width: 80px;
  margin: auto 5px;
  border-radius: 4px;
`;

export const PriceText = styled.Text`
  font-weight: bold;
  margin: auto 10px;
  font-size: 20px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ProductImage = styled.Image`
  margin: auto 15px auto;
  width: 100px;
  height: 100px;
`;
export const ProductInfo = styled.View`
  flex-direction: column;
  width: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 20px;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;
export const ContainerFinish = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ButtonFinish = styled.TouchableOpacity`
  background: #7159c1;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: auto 15px 15px 15px;
  border-radius: 4px;
`;
export const ButtonFinishText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
export const TotalPriceText = styled.Text`
  font-size: 20px;
  color: #999;
  font-weight: bold;
  margin: 20px auto 0;
`;
export const TotalPriceValue = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Delete = styled.TouchableOpacity``;

export const ButtonIncrement = styled.TouchableOpacity``;
export const ButtonDecrement = styled.TouchableOpacity``;
