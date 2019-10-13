import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  ContainerInfo,
  ContainerInput,
  ProductAmount,
  PriceText,
  Product,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ContainerFinish,
  ButtonFinish,
  ButtonFinishText,
  TotalPriceText,
  TotalPriceValue,
  Delete,
  ButtonIncrement,
  ButtonDecrement,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <FlatList
        data={cart}
        keyExtractor={cartItem => String(cartItem.id)}
        renderItem={({ item }) => (
          <>
            <Product>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductInfo>
              <Delete onPress={() => removeFromCart(item.id)}>
                <Icon name="delete-forever" size={24} color="#7159c1" />
              </Delete>
            </Product>
            <ContainerInfo>
              <ContainerInput>
                <ButtonDecrement onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </ButtonDecrement>
                <ProductAmount>{item.amount}</ProductAmount>
                <ButtonIncrement onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </ButtonIncrement>
              </ContainerInput>
              <PriceText>{item.subtotal}</PriceText>
            </ContainerInfo>
          </>
        )}
      />
      <ContainerFinish>
        <TotalPriceText>TOTAL</TotalPriceText>
        <TotalPriceValue>{total}</TotalPriceValue>
      </ContainerFinish>
      <ButtonFinish>
        <ButtonFinishText>FINALIZAR PEDIDO</ButtonFinishText>
      </ButtonFinish>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
