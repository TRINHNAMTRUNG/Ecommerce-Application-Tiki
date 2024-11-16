import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Sidebar = () => {
  // State để theo dõi mục đang được chọn
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Dữ liệu danh mục
  const categories = [
    { name: "Gợi ý cho bạn", image: "https://storage.googleapis.com/a1aa/image/7dq4eq79ilzQOaFImuKOPAMa5gpMI8rRTaRyno0TBFnujj4JA.jpg" },
    { name: "Nhà Sách Tiki", image: "https://storage.googleapis.com/a1aa/image/sxM8E1OLOiLLF5ZZaos1up1eEpRxQ1mPXrBekqdLc1SRHHxTA.jpg" },
    { name: "Nhà Cửa - Đời Sống", image: "https://storage.googleapis.com/a1aa/image/eE3K1XTVfVlqd0zWgunaPb6MzeQ4opW656tSqoUupxd3OOinA.jpg" },
    { name: "Điện Thoại - Máy Tính", image: "https://storage.googleapis.com/a1aa/image/MJXE9EFM4l4UNN2xLSP3UAcWDkvYJzUlO1WfyvRQGLQtjj4JA.jpg" },
    
  ];

  // Xử lý khi người dùng chọn danh mục
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.sidebar}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.sidebarItem,
                selectedCategory === category.name && styles.selectedItem
              ]}
              onPress={() => handleCategorySelect(category.name)}
            >
              <Image
                style={styles.icon}
                source={{ uri: category.image }}
              />
              <Text style={styles.text}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    paddingVertical: 5,
  },
  sidebarItem: {
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 10,
    flexDirection: "column",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#ffffff", // Màu nền khi mục được chọn
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    color: "#333",
  },
});

export default Sidebar;
