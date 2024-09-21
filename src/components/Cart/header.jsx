import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Import CheckBox
import Icon from 'react-native-vector-icons/FontAwesome6';

const Cart = () => {
  const [checked, setChecked] = useState(false); // State để theo dõi checkbox

  return (
    <View>
      <View style={styles.header}>
        <Icon name="chevron-left" style={styles.icon} />
        <Text style={styles.headerText}>Giỏ Hàng</Text>
      </View>
      <View style={styles.content}>
        <CheckBox 
          checked={checked}
          onPress={() => setChecked(!checked)}
          containerStyle={styles.checkboxContainer}
        />
        <Text style={styles.contentText}>Tất cả</Text>
        <Icon name="trash-alt" size={20} color="#888" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0099FF',
    color: 'white',
    textAlign: 'center',
    padding: 15,
  
    fontSize: 18,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 15,
    fontSize: 20,
    color: 'white',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    flex :1
  },
  content: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
  },
  contentText: {
    flexGrow: 1,
    marginLeft: 10, // Thêm khoảng cách giữa checkbox và text
  },
});

export default Cart;
