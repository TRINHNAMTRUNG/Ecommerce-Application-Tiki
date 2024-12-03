import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Import the Icon component from react-native-vector-icons

// Giả lập hàm fetchInvoiceDetail từ API
const fetchInvoiceDetail = async (invoiceId) => {
  return {
    productName: "Bếp điện từ đa năng Nagakawa NAG0716 - Kèm nổi lẩu và vỉ nướng chuyên …",
    quantity: 1,
    unitPrice: 1779000,
    subtotal: 1779000,
    imageUrl: "https://salt.tikicdn.com/cache/750x750/ts/product/f2/c6/91/53e8199c2e64399f59b695756fa87af1.jpg.webp" // Thêm link ảnh sản phẩm giả lập
  };
};

const InvoiceDetailScreen = ({ route, navigation }) => {
  const { invoiceId } = route.params; // Lấy invoiceId từ tham số

  const [invoiceDetail, setInvoiceDetail] = useState(null);

  useEffect(() => {
    const loadInvoiceDetail = async () => {
      const detail = await fetchInvoiceDetail(invoiceId);
      setInvoiceDetail(detail);
    };

    loadInvoiceDetail();
  }, [invoiceId]);

  if (!invoiceDetail) {
    return (
      <View style={styles.container}>
        <Text>Đang tải thông tin...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#2ecc71" style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.invoiceId}>Chi tiết đơn hàng {invoiceId}</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Product Image */}
        <Image source={{ uri: invoiceDetail.imageUrl }} style={styles.productImage} />
        
        {/* Product Details */}
        <View style={styles.card}>
          <Text style={styles.detailText}>
            <Text style={styles.label}>Tên sản phẩm: </Text>
            {invoiceDetail.productName}
          </Text>

          <Text style={styles.detailText}>
            <Text style={styles.label}>Số lượng: </Text>
            {invoiceDetail.quantity}
          </Text>

          <Text style={styles.detailText}>
            <Text style={styles.label}>Đơn giá: </Text>
            {formatCurrency(invoiceDetail.unitPrice)}
          </Text>

          <Text style={styles.detailText}>
            <Text style={styles.label}>Tổng tiền: </Text>
            {formatCurrency(invoiceDetail.subtotal)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Hàm format tiền tệ
const formatCurrency = (amount) => {
  return `${amount.toLocaleString('vi-VN')} VND`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4, // Shadow effect for header
  },
  icon: {
    marginRight: 10, // Space between the icon and title
  },

  invoiceId: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',

  },
  content: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 3, // Shadow for card
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
});

export default InvoiceDetailScreen;
