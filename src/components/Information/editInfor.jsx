import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon từ FontAwesome

const EditInputScreen = ({ navigation }) => {
  const [name, setName] = useState('Phạm Phương Ngọc');
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const handleTextChange = (text) => {
    setName(text);
    setIsSaveEnabled(text.trim().split(' ').length >= 2);
  };

  const clearName = () => {
    setName('');
    setIsSaveEnabled(false);
  };

  // Hàm quay lại trang trước
  const handleGoBack = () => {
    navigation.goBack(); // Điều hướng về trang trước
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
     
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-left" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Họ & Tên</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Họ & Tên</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleTextChange}
            placeholder="Nhập họ & tên"
          />
          {name !== '' && (
            <TouchableOpacity style={styles.clearButton} onPress={clearName}>
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.note}>Họ & tên gồm 2 từ trở lên</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.saveButton,
          isSaveEnabled ? styles.saveButtonActive : styles.saveButtonDisabled,
        ]}
        disabled={!isSaveEnabled}
      >
        <Text style={styles.saveButtonText}>Lưu thay đổi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 36,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0099ff',
    paddingHorizontal: 15,
    paddingVertical: 10,

    width: '100%',
  },
  icon: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  formGroup: {
    width: '90%',
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    paddingRight: 40, // Ensure space for clear button
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    backgroundColor: '#ccc',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  note: {
    marginTop: 5,
    color: '#888',
    fontSize: 14,
  },
  saveButton: {
    width: '90%',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonActive: {
    backgroundColor: '#0099ff',
  },
  saveButtonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditInputScreen;
