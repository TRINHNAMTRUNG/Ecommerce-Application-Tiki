import React, { memo, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; 
import ContainerCart from "../../components/Cart/containerCart";
import { getCartItems } from "../../services/cartService"; 
import { useSelector } from "react-redux";
import PromoComponentTotal from "../../components/Cart/promoTotal"; // Import your PromoComponentTotal

const CartPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dataUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await getCartItems();
      console.log("List cart                        ", res)
      if (res.success && res.data) {
        setCartItems(res.data.listProduct);
        calculateTotal(res.data.listProduct);
      } else {
        setCartItems([]); // Clear the cart if no data is returned
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]); // Clear the cart in case of error
    }
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const handleClose = () => {
    console.log('Đóng giỏ hàng');
    navigation.goBack(); // Quay lại màn hình trước đó
  };

  // Calculate the total quantity of items
  const totalQuantity = cartItems.reduce((a, b) => a + b.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose}>
            <FontAwesomeIcon icon={faXmark} size={16} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Giỏ hàng</Text>
          <View style={{ width: 24 }} /> 
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {cartItems.length > 0 ? (
          <>
            <ContainerCart cartItems={cartItems} navigation={navigation} />
      
          
          </>
        ) : (
          <View style={styles.emptyCartContainer}>
            <Image
              source={{
                uri: 'https://storage.googleapis.com/a1aa/image/wvPYdsPQzmZ6CZGywZUZCHej0meQ7nJsuFpseEt9iKie4JJPB.jpg',
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.title}>Giỏ hàng trống</Text>
              <Text style={styles.subtitle}>
                Vui lòng thêm sản phẩm!
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
            
            {/* Insert PromoComponentTotal */}
            <View style={styles.fixedPromoContainer}>
              <PromoComponentTotal 
                subtotal={totalPrice} 
                quantity={totalQuantity} 
                navigation={navigation} 
              />
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#4A4A4A',
  },
  emptyCartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

});

export default memo(CartPage);
