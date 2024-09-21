import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { countItemsCountSelector, carttotalSelector } from '../../redux/selectors';
import Icon from 'react-native-vector-icons/FontAwesome6';

import Header from "../../components/Cart/header";
import ProductCard from "../../components/Cart/card";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector(carttotalSelector);
  const itemCount = useSelector(countItemsCountSelector);

  // Nếu giỏ hàng trống

    return (
      <View style={styles.container}>
        <Header />
        <ProductCard/>
      </View>
    );

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F4F4F4',
    paddingTop: 30,
  },

});

export default CartPage;
