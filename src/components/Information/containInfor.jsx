import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ProfileInfo = () => {
  const profileData = [
    { icon: 'user', label: 'Họ & Tên', value: 'Phạm Phương Ngọc' },
    { icon: 'user-tag', label: 'Nickname', value: 'Thêm nickname' },
    { icon: 'calendar-alt', label: 'Ngày sinh', value: 'Thêm ngày, tháng, năm sinh' },
    { icon: 'venus-mars', label: 'Giới tính', value: 'Nam' },
    { icon: 'flag', label: 'Quốc tịch', value: 'Thêm thông tin quốc tịch' },
    { icon: 'phone', label: 'Số điện thoại', value: '0398454090' },
    { icon: 'envelope', label: 'Địa chỉ email', value: 'truongdinhduy0119a@gmail.com' },
    { icon: 'lock', label: 'Đổi mật khẩu', value: '' },
  ];

  return (
    <View style={styles.container}>
      {profileData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
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
