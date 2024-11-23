import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';
import { getListRootCategory } from '../../services/categoryService';
import { Picker } from '@react-native-picker/picker';

const CreateNewProduct = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [promotion, setPromotion] = useState('');
  const [stock, setStock] = useState('');
  const [categories, setCategories] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch categories on component mount
    const fetchCategories = async () => {
      setLoading(true);
      const response = await getListRootCategory();
      if (response.success) {
        setCategories(response.data); // Assuming response.data contains the categories
      } else {
        console.error('Failed to fetch categories');
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const handleProductNameChange = (text) => {
    setProductName(text);
    setCharCount(text.length);
  };

  // Hàm để mở thư viện ảnh và chọn nhiều ảnh
  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 5, quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log('User canceled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        // Lưu trữ URI của ảnh đã chọn vào mảng
        const newImages = response.assets.map((asset) => asset.uri);
        setImages(newImages);
      }
    });
  };

  // Hàm xử lý tạo sản phẩm mới
  const handleCreateProduct = () => {
    const newProduct = {
      name: productName,
      category: category,
      description: description,
      price: parseFloat(price),
      promotion: promotion,
      stock: parseInt(stock),
      images: images,
    };

    console.log('Product created:', newProduct);

    // Show success alert
    Alert.alert('Success', 'Sản phẩm đã được tạo thành công!', [
      { text: 'OK', onPress: () => navigation.goBack() }, // Navigate back to the previous screen
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Tạo Sản phẩm mới</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>1. Thông Tin Chung</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>* Tên sản phẩm</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên Sản phẩm"
            value={productName}
            onChangeText={handleProductNameChange}
          />
          <Text style={styles.charCount}>{charCount} | 255</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>* Mô tả</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mô tả sản phẩm"
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>* Giá</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập giá sản phẩm"
            value={price}
            keyboardType="numeric"
            onChangeText={setPrice}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>* Danh mục</Text>
          {loading ? (
            <Text>Loading categories...</Text>
          ) : (
            <Picker
              selectedValue={category}
              style={styles.picker}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Chọn danh mục" value="" />
              {categories.map((categoryItem, index) => (
                <Picker.Item key={index} label={categoryItem.name} value={categoryItem.id} />
              ))}
            </Picker>
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>* Số lượng tồn</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số lượng tồn kho"
            value={stock}
            keyboardType="numeric"
            onChangeText={setStock}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>* Khuyến mãi</Text>
          <TextInput
            style={styles.input}
            placeholder="Chọn khuyến mãi (nếu có)"
            value={promotion}
            onChangeText={setPromotion}
          />
        </View>

        <TouchableOpacity style={styles.createButton} onPress={handleCreateProduct}>
          <Text style={styles.createButtonText}>Tạo sản phẩm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#dc3545',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    fontSize: 14,
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    color: '#6c757d',
  },
  imagePickerButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#fff',
    fontSize: 14,
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  createButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreateNewProduct;
