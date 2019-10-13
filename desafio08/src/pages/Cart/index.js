import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalEnd, product) => {
        return totalEnd + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
              <Delete onPress={() => dispatch(CartActions.removeFromCart(item.id))}>
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
