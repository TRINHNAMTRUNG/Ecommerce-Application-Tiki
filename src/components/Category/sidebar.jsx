// Sidebar.js
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Sidebar = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.sidebar}>
        <View style={styles.sidebarItem}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://storage.googleapis.com/a1aa/image/7dq4eq79ilzQOaFImuKOPAMa5gpMI8rRTaRyno0TBFnujj4JA.jpg",
            }}
          />
          <Text style={styles.text}>Gợi ý cho bạn</Text>
        </View>
        <View style={styles.sidebarItem}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://storage.googleapis.com/a1aa/image/sxM8E1OLOiLLF5ZZaos1up1eEpRxQ1mPXrBekqdLc1SRHHxTA.jpg",
            }}
          />
          <Text style={styles.text}>Nhà Sách Tiki</Text>
        </View>
        <View style={styles.sidebarItem}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://storage.googleapis.com/a1aa/image/eE3K1XTVfVlqd0zWgunaPb6MzeQ4opW656tSqoUupxd3OOinA.jpg",
            }}
          />
          <Text style={styles.text}>Nhà Cửa - Đời Sống</Text>
        </View>
        <View style={styles.sidebarItem}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://storage.googleapis.com/a1aa/image/MJXE9EFM4l4UNN2xLSP3UAcWDkvYJzUlO1WfyvRQGLQtjj4JA.jpg",
            }}
          />
          <Text style={styles.text}>Điện Thoại - Máy Tính</Text>
        </View>



      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#e7f3ff", 
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
  icon: {
    width: 60,  // Giảm kích thước icon
    height:60, // Giảm kích thước icon
    borderRadius: 8, // Bo góc cho icon
  },
  text: {
    fontSize: 12, 
    marginTop: 10,
    textAlign: "center",
    color: "#333",
  },
});

export default Sidebar;
