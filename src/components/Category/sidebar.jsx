import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const categories = [
  {
    id: "1",
    image:
      "https://storage.googleapis.com/a1aa/image/msCSsUVkYlomOtofJASlDDIe5cLKlhCpkf656MorEZrDPOinA.jpg",
    name: "Đồ Chơi - Mẹ & Bé",
  },
  {
    id: "2",
    image:
      "https://storage.googleapis.com/a1aa/image/ovt8fXFOe4u1G0McoD3GfPK232IelZn5PnEZLZMr9RyBe4IeE.jpg",
    name: "Điện Thoại - Máy Tính Bảng",
  },
  {
    id: "3",
    image:
      "https://storage.googleapis.com/a1aa/image/Ow51Akxjk0I8BRTDNi68YgLQwnedV3oR2ELTCnQAK5Csjj4JA.jpg",
    name: "NGON",
  },
  {
    id: "4",
    image:
      "https://storage.googleapis.com/a1aa/image/e6GV54ZmjswsBiaaCfrxLZgIzKKzKZQlSeqKJVvXv9MEPOinA.jpg",
    name: "Làm Đẹp - Sức Khỏe",
  },
  {
    id: "5",
    image:
      "https://storage.googleapis.com/a1aa/image/H4pueYkqNmTYASnClxF0ivbo7rJQJb76vfuxfWfINTZwdcEPB.jpg",
    name: "Điện Gia Dụng",
  },
  {
    id: "6",
    image:
      "https://storage.googleapis.com/a1aa/image/eY75m7uhwLTHBSnW4jrLfkdw25PNfFUuBD5SkoAYtE2kOOinA.jpg",
    name: "Thời trang nữ",
  },
  {
    id: "7",
    image:
      "https://storage.googleapis.com/a1aa/image/kOQ8dR6lThpJD9eh0IqoSzuI5Qt1xr8gN6rXyN9oLmyxjj4JA.jpg",
    name: "Thời trang nam",
  },
  {
    id: "8",
    image:
      "https://storage.googleapis.com/a1aa/image/FL5S7NtoFO50AB4SiCFeE2RUeldCh8Fss77uBgDpbfPfdcEPB.jpg",
    name: "Giày - Dép nữ",
  },
  {
    id: "9",
    image:
      "https://storage.googleapis.com/a1aa/image/fi1aooYNdRz2HaxoEe51fllO1isOIC7pH4HNZjqAyRveccEPB.jpg",
    name: "Túi thời trang nữ",
  },
  {
    id: "10",
    image:
      "https://storage.googleapis.com/a1aa/image/rnlTcfSWElwVCq2S34g5EgJMN4MF8zeFjdkPlE2oIDVVHHxTA.jpg",
    name: "Giày - Dép nam",
  },
  {
    id: "11",
    image:
      "https://storage.googleapis.com/a1aa/image/T8jCttgqSewqbyySGM3cK2lN2iZSc7HR4LyR3QO3RX4pjj4JA.jpg",
    name: "Túi thời trang nam",
  },
  {
    id: "12",
    image:
      "https://storage.googleapis.com/a1aa/image/juRef6nhnpgKxEaniF98989WD4WlvwLp5NqzTcpBtltUHHxTA.jpg",
    name: "Balo và Vali",
  },
  
];

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

        <View style={styles.sidebarItem}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://storage.googleapis.com/a1aa/image/u4OeeustEgtN7UIzm4PVmSwttipQJGKaZP0BFRTytSvWHHxTA.jpg",
            }}
          />
          <Text style={styles.text}>Thiết Bị Số - Phụ Kiện Số</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const CategoryGrid = () => (
  <FlatList
    data={categories}
    renderItem={({ item }) => (
      <View style={styles.categoryItem}>
        <Image style={styles.categoryImage} source={{ uri: item.image }} />
        <Text>{item.name}</Text>
      </View>
    )}
    keyExtractor={(item) => item.id}
    numColumns={3}
    style={styles.categoryGrid}
  />
);

const App = () => (
  <View style={styles.container}>
    <View style={styles.sidebarWrapper}>
      <Sidebar />
    </View>
    <View style={styles.mainContentWrapper}>
      <Text style={styles.heading}>Danh mục sản phẩm</Text>
      <CategoryGrid />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
  },
  sidebarWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e7f3ff",
  },
  sidebar: {
    flex: 1,
  },
  sidebarItem: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "column",
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  mainContentWrapper: {
    flex: 3,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: "center",
    margin: 4,
    width: "30%",
    textAlign: "center",
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryGrid: {
    flex: 1,
  },
});

export default App;
