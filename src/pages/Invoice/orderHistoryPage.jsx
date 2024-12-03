import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Import biểu tượng từ thư viện

const InvoiceListScreen = ({ navigation }) => {
  // Dữ liệu mẫu
  const orderData = [
    {
      invoiceId: '12345',
      customer: '6724cdc6646etad39158bbf7',
      invoiceDate: '2024-11-08T00:00:00.000+00:00',
      paymentStatus: 'Pending',
      totalAmount: 200000,
      shippingAddress: '123 Street, City, Country',
    },
    {
      invoiceId: '12346',
      customer: '6724cdc6646etad39158bbf7',
      invoiceDate: '2024-10-05T00:00:00.000+00:00',
      paymentStatus: 'Completed',
      totalAmount: 150000,
      shippingAddress: '456 Avenue, City, Country',
    },
  ];

  // Hàm format tiền tệ
  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('vi-VN')} VND`;
  };

  // Render từng đơn hàng
  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderDate}>Ngày đặt: {new Date(item.invoiceDate).toLocaleDateString()}</Text>
        <Text style={[styles.orderStatus, item.paymentStatus === 'Pending' ? styles.pending : styles.completed]}>
          {item.paymentStatus}
        </Text>
      </View>
      <Text style={styles.orderAmount}>Tổng tiền: {formatCurrency(item.totalAmount)}</Text>
      <Text style={styles.orderAddress}>Địa chỉ giao: {item.shippingAddress}</Text>
      
      {/* Nút chuyển hướng tới chi tiết hóa đơn */}
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('InvoiceDetail', { invoiceId: item.invoiceId })} // Truyền invoiceId
      >
        <Text style={styles.detailButtonText}>Xem chi tiết</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Icon name="chevron-left" size={20} color="#2ecc71" style={styles.icon} />
        <Text style={styles.title}>Lịch sử đơn hàng</Text>
      </View>
      <FlatList
        data={orderData}
        keyExtractor={(item) => item.invoiceId} // Sử dụng invoiceId làm key
        renderItem={renderOrder}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',   // Đặt tiêu đề và biểu tượng nằm ngang
    alignItems: 'center',   // Canh giữa các phần tử
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,          // Khoảng cách giữa biểu tượng và tiêu đề
  },
  icon: {
    marginRight: 8,         // Khoảng cách giữa biểu tượng và tiêu đề
  },
  list: {
    paddingBottom: 16,
  },
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderDate: {
    fontSize: 14,
    color: '#333',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  pending: {
    color: '#e74c3c',
  },
  completed: {
    color: '#2ecc71',
  },
  orderAmount: {
    fontSize: 16,
    color: '#2d3436',
    marginBottom: 4,
  },
  orderAddress: {
    fontSize: 14,
    color: '#636e72',
  },
  detailButton: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default InvoiceListScreen;
