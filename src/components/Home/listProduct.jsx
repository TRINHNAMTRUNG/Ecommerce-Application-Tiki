import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; 

import adv01 from "../../assets/listAdv/adv01.png"
const DetailProduct = () => {
  return (
    <View style={styles.detailContain}>
        
        <View style={styles.styleProductImage}>
          <Image source={require = adv01} style={{ width: '100%', height: '100%' }} />
        </View>

      {/* Dấu chấm ở giữa để chỉ khoảng trống */}
      <View style={styles.middleSpacer} />

      {/* Giỏ hàng và menu dấu 3 chấm */}
      <View style={styles.rightIcons}>
        {/* Biểu tượng giỏ hàng */}
        <TouchableOpacity>
          <Icon name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>

        {/* Dấu 3 chấm */}
        <TouchableOpacity style={{ marginLeft: 17 }}>
          <Icon name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContain: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative',
  },
  styleProductImage: {
    width: '100%',
    height: 200, 
  },
  middleSpacer: {
    marginVertical: 20, 
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DetailProduct;
