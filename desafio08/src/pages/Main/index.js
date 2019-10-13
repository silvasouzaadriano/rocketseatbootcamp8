import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ItemContainer,
  ImageProducts,
  ProductTitle,
  ProductPrice,
  AddButton,
  AddButtonText,
  InfoButton,
  InfoButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((Qtdamount, product) => {
      Qtdamount[product.id] = product.amount;

      return Qtdamount;
    }, {})
  );

  useEffect(() => {
    async function setData() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    setData();
  }, []);

  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <ItemContainer>
            <ImageProducts source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddButton onPress={() => handleAddProduct(item.id)}>
              <InfoButton>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <InfoButtonText>{amount[item.id] || 0}</InfoButtonText>
              </InfoButton>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </ItemContainer>
        )}
      />
    </Container>
  );
}

