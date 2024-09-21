import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { countItemsCountSelector, carttotalSelector } from '../../redux/selectors';

const CartPageMin = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector(carttotalSelector);
  const itemCount = useSelector(countItemsCountSelector);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ hàng ({itemCount} sản phẩm)</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>Số lượng: {item.quantity}</Text>
            <Text>Giá: {item.price * item.quantity} VND</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Tổng cộng: {total} VND</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CartPageMin;
