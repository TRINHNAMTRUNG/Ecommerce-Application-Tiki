import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet, FlatList, Switch } from 'react-native';
import { getListTopDeal } from '../../services/productService';

const CreateProduct = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch products when component mounts
    setLoading(true);
    getListTopDeal(1, true)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productRow}>
      <View style={styles.productInfo}>
        <Switch value={false} />
        <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
        <View style={styles.details}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productSku}>SKU: {item.sku}</Text>
          <Text style={styles.productOption}>Lưu kho Tiki (FBT)</Text>
          <Text style={styles.productOption}>Xem thêm 1 lựa chọn</Text>
        </View>
      </View>
      <Text style={styles.stock}>{item.stock}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.tikiFee}>{item.tikiFee}</Text>
      <Text style={styles.profit}>{item.profit}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Chỉnh sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Bật sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh sách sản phẩm</Text>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate("createNewProduct")}>
          <Text style={styles.createButtonText}>+ Tạo sản phẩm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        {['all', 'selling', 'outOfStock', 'draft', 'pending', 'violations', 'disabled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => handleTabChange(tab)}
          >
            <Text style={styles.tabText}>
              {tab === 'all' ? 'Tất cả (16)' : tab === 'selling' ? 'Đang bán (0)' : 'Hết hàng (0)'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.filterBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Nhập tên Sản phẩm"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.productList}>
        {loading ? (
          <Text>Đang tải...</Text>
        ) : (
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Text>Không có sản phẩm nào.</Text>}
            contentContainerStyle={styles.flatListContainer}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  createButtonText: {
    color: 'white',
    fontSize: 14,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderColor: '#007bff',
  },
  tabText: {
    fontSize: 14,
    color: '#007bff',
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  productList: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  productRow: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 15,
  },
  productInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productSku: {
    fontSize: 12,
    color: '#888',
  },
  productActions: {
    alignItems: 'flex-end',
    flex: 1,
  },
  productStock: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 14,
  },
  productTikiFee: {
    fontSize: 14,
    color: '#f44336',
  },
  productProfit: {
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
  },
  moreButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  moreButtonText: {
    color: '#007bff',
    fontSize: 14,
  },
});

export default CreateProduct;
