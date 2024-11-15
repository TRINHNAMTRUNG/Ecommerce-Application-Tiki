import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tài khoản</Text>
        <View style={styles.icons}>
          <FontAwesome5 name="cog" style={styles.icon} />
          <View style={styles.iconBadgeWrapper}>
            <FontAwesome5 name="shopping-cart" style={styles.icon} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.profile}>
        <Image
          source={{
            uri: 'https://storage.googleapis.com/a1aa/image/F0TlmWXjVZ4xI591D9vfS8ZnmxTX8ZNf98mX1ecdwlFP9SinA.jpg',
          }}
          style={styles.profileImage}
        />
        <View style={styles.info}>
          <View style={styles.infoRow}>
            <Text style={styles.userName}>Phạm Phương Ngọc</Text>
            <FontAwesome5 name="pencil-alt" style={styles.editIcon} />
          </View>
          <Text style={styles.nickname}>+Thêm nickname</Text>
          <Text style={styles.badgeLabel}>Khách hàng</Text>
        </View>
      </View>


      <View style={styles.cards}>
        <View style={[styles.card, styles.astra]}>
          <FontAwesome5 name="eye" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Astra</Text>
          <Text style={styles.cardSubtitle}>Tìm thêm</Text>
        </View>
        <View style={[styles.card, styles.tikiXu]}>
          <FontAwesome5 name="eye" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Tiki Xu</Text>
          <Text style={styles.cardSubtitle}>Tìm thêm</Text>
        </View>
        <View style={[styles.card, styles.maGiamGia]}>
          <FontAwesome5 name="eye" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Mã giảm giá</Text>
          <Text style={styles.cardSubtitle}>Tìm thêm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 36
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 15,
    color: '#000',
  },
  iconBadgeWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editIcon: {
    fontSize: 18,
    color: 'gray',
    marginLeft: 10,
  },
  nickname: {
    color: 'gray',
    marginTop: 5,
  },
  badgeLabel: {
    backgroundColor: '#e0e0e0',
    color: 'gray',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  astra: {
    backgroundColor: '#f0e8ff',
  },
  tikiXu: {
    backgroundColor: '#fff8e1',
  },
  maGiamGia: {
    backgroundColor: '#e0f7ff',
  },
  cardIcon: {
    fontSize: 18,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Header;
