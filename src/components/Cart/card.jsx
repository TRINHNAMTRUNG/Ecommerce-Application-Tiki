import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="store" size={20} color="#333" />
        <Text style={styles.headerText}>Tiki Trading</Text>
        <Icon name="chevron-right" size={14} color="#888" style={styles.arrowIcon} />
      </View>
      <View style={styles.product}>
        <Image
          source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-cknc7IQbL5104Sd7OzoCDVso.png?st=2024-09-16T15%3A20%3A04Z&amp;se=2024-09-16T17%3A20%3A04Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-15T23%3A38%3A26Z&amp;ske=2024-09-16T23%3A38%3A26Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=GWtD62qrS8FI5fFSKeJdMDjkcZyxNzSJicblaTg1pnQ%3D' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <View style={styles.badges}>
            <Text style={styles.badge}>CHÍNH HÃNG</Text>
            <Text style={styles.badge}>30 NGÀY ĐỔI TRẢ</Text>
          </View>
          <Text style={styles.productTitle}>
            Điện thoại Samsung Galaxy A54 5G - Đã kích hoạt bảo hành điện tử -...
          </Text>
          <Text style={styles.price}>5.990.000đ</Text>
          <Text style={styles.oldPrice}>10.490.000đ</Text>
          <Text style={styles.delivery}>Giao thứ 6, 20/09</Text>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              textAlign='1'
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.remove}>
            <Text style={styles.removeText}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Shop khuyến mãi</Text>
        <Text>Vui lòng chọn sản phẩm trước</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  badges: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  badge: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#ff424e',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginRight: 5,
  },
  badgeLast: {
    backgroundColor: '#0d5cb6',
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#ff424e',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  arrowIcon:{
    paddingLeft: 10,
    flex: 1,
    alignItems: 'center'
    
  },
  delivery: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantityInput: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  remove: {
    fontSize: 14,
    color: '#ff424e',
    marginTop: 10,
  },
  removeText: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    color: '#999',
  },
});

export default ProductCard;
