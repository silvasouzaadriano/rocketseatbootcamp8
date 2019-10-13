import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
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

import Header from '../../components/Header';

class Home extends Component {
  static navigationOptions = {
    headerTitle: <Header />,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ItemContainer>
              <ImageProducts source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <AddButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
