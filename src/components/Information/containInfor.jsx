// ProfileInfo.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const ProfileInfo = ({ navigation }) => {
  const dataUser = useSelector((state) => state.auth.user);

  const profileData = [
    { icon: 'user', label: 'Họ & Tên', value: dataUser.customerName, placeholder: "Nhập họ tên", key: "customerName" },
    { icon: 'phone', label: 'Số điện thoại', value: dataUser.phoneNumber, placeholder: "Nhập số điện thoại", key: "phoneNumber" },
    { icon: 'envelope', label: 'Địa chỉ email', value: dataUser.email, placeholder: "Nhập địa chỉ email", key: "email" },
    { icon: 'venus-mars', label: 'NickName', value: dataUser.nickName ? dataUser.nickName : "", key: "nickName" },
    { icon: 'calendar-alt', label: 'Ngày sinh', value: dataUser.birthDate ? dataUser.birthDate : "", placeholder: "Chọn ngày sinh", key: "birthDate" },
    { icon: 'lock', label: 'Đổi mật khẩu', value: '', onPress: () => navigation.navigate("changePassword") },
  ];

  return (
    <View style={styles.container}>
      {profileData.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.item} 
          onPress={() => navigation.navigate("setting", { dataField: item })}
        >
          <FontAwesome5 name={item.icon} size={20} color="#888" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>{item.label}</Text>
            {item.value ? <Text style={styles.value}>{item.value}</Text> : null}
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#888" style={styles.arrow} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#888',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    marginLeft: 10,
  },
});

export default ProfileInfo;
