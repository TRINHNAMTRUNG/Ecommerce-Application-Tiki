import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const methods = [
    { id: 1, name: 'Tiền mặt khi nhận hàng', icon: '💵' },
    { id: 2, name: 'Momo', icon: '📱', category: 'Ví điện tử' },
    { id: 3, name: 'VNPAY', icon: '🏦' },
    { id: 4, name: 'Thẻ ATM (Internet Banking)', icon: '💳' },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
  };

  const handleConfirm = () => {
    const selected = methods.find((method) => method.id === selectedMethod);
    if (selected) {
      // Hiển thị Alert xác nhận
      Alert.alert(
        'Xác nhận thanh toán',
        `Bạn có chắc muốn thanh toán bằng phương thức "${selected.name}" không?`,
        [
          {
            text: 'Hủy',
            style: 'cancel',
          },
          {
            text: 'Xác nhận',
            onPress: () => {
              // Thông báo thanh toán thành công
              Alert.alert('Thông báo', `Bạn đã thanh toán thành công bằng phương thức "${selected.name}"!`);
            },
          },
        ]
      );
    } else {
      Alert.alert('Lỗi', 'Vui lòng chọn một phương thức thanh toán.');
    }
  };

  const renderMethod = (method) => (
    <TouchableOpacity
      key={method.id}
      style={[
        styles.method,
        selectedMethod === method.id && styles.selectedMethod,
      ]}
      onPress={() => handleSelect(method.id)}
    >
      <Text style={styles.icon}>{method.icon}</Text>
      <Text style={styles.methodText}>{method.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn Phương Thức Thanh Toán</Text>
      <ScrollView>
        {methods.map(renderMethod)}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.confirmButton,
          !selectedMethod && styles.disabledButton,
        ]}
        onPress={handleConfirm}
        disabled={!selectedMethod}
      >
        <Text style={styles.buttonText}>Xác Nhận Thanh Toán</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedMethod: {
    borderColor: '#007BFF',
    backgroundColor: '#E6F0FF',
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  methodText: {
    fontSize: 16,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentMethods;
