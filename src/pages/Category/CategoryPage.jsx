import React, { memo } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Sidebar from "../../components/Category/sidebar";
import CategoryGrid from "../../components/Category/categoryGrid";
import Header from "../../components/Category/header";
import OfferComponent from "../../components/Category/offer";

const CategoryPage = () => {
  return (
    <View style={styles.container}>
      {/* Phần header và offer không cần cuộn */}
      <Header />
      <OfferComponent />

      <View style={styles.mainContentWrapper}>
        <View style={styles.mainContentWrapper2}> 
            <FlatList
              style={[styles.sidebarWrapper, { flex: 1 }]}
              data={[1]} // Chỉ cần một mục để render Sidebar
              renderItem={() => <Sidebar />}
              keyExtractor={() => "sidebar"}
            />
        </View>

        <FlatList
          style={[styles.categoryGridWrapper, { flex: 3 }]}
          data={[1]} // Chỉ cần một mục để render CategoryGrid
          renderItem={() => <CategoryGrid />}
          keyExtractor={() => "categoryGrid"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  mainContentWrapper: {
    flexDirection: "row", // Đặt các phần tử ngang hàng
    flex: 1,
    padding: 4,
  },
  sidebarWrapper: {
    flex: 1, // Sidebar chiếm 1 phần không gian
    backgroundColor: "#e0f7fa", // Màu nền riêng cho sidebar
    marginRight: 6, // Khoảng cách giữa Sidebar và CategoryGrid
  },
  categoryGridWrapper: {
    flex: 3, // CategoryGrid chiếm 3 phần không gian
  },
});

export default memo(CategoryPage);
