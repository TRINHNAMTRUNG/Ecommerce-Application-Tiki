import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

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

const CategoryGrid = () => (
    <View style={styles.container}>
      <Text style={styles.headerText}>Danh mục đang hot</Text>  
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image style={styles.categoryImage} source={{ uri: item.image }} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.categoryGrid}
      />
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 6,
       
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical:10,
        color: '#333',  // Màu chữ tiêu đề
    },
    categoryItem: {
        alignItems: "center",
        margin: 4,
        padding: 10,
        width: "30%",
        textAlign: "center",
    },
    categoryImage: {
        width: 70,
        height: 70,
        marginBottom: 10,
    },
    categoryGrid: {
        flex: 1,
    },
    categoryText: {
        fontSize: 12,
    }
    
  });
  
export default CategoryGrid;