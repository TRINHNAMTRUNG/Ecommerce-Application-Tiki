import { memo, useEffect, useRef } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CardProduct from "./cardProduct";
import titleDeal from "../../assets/thumb/titleDeal.png"

const ListProduct = ({ listTopDeal, showHorizon }) => {
  return (
    <View style={stylesListProduct.containerListProduct}>
      <View style={stylesListProduct.frameTitleList}>
        <Image source={titleDeal} style={stylesListProduct.imageTitleList} />
        <Text style={stylesListProduct.textShowAll}>Xem tất cả</Text>
      </View>

      {showHorizon ? (
        <FlatList
          nestedScrollEnabled
          style={[stylesListProduct.frameListProduct, { flexDirection: "row" }]}
          data={listTopDeal}
          renderItem={({ item }) => <CardProduct product={item} />}
          keyExtractor={(item) => `prod - ${item._id}`}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      ) :
        (
          <FlatList
            nestedScrollEnabled
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-around" }}
            style={[stylesListProduct.frameListProduct, { flexDirection: "column" }]}
            data={listTopDeal}
            renderItem={({ item }) => <CardProduct product={item} />}
            keyExtractor={(item) => `prod - ${item._id}`}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
          />
        )}

      {/* {!showHorizon && (
        <View style={stylesListProduct.gridContainer}>
          {listTopDeal.map((element, index) => (
            <View
              key={element._id}
              style={[stylesListProduct.cardWrapper, index % 2 === 0 && stylesListProduct.firstColumn]}
            >
              <CardProduct product={element} />
            </View>
          ))}
        </View>
      )} */}
    </View>
  );
};

const stylesListProduct = StyleSheet.create({
  containerListProduct: {
    width: "100%",
    minHeight: 370,
    padding: 16,
    backgroundColor: "white",
    marginTop: 12,
  },
  frameListProduct: {
    flex: 1,

  },
  frameTitleList: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageTitleList: {
    width: 204,
    height: 32,
  },
  textShowAll: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0A68FF",
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // Cho phép các phần tử tràn xuống dòng mới
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%', // Chia thành 2 cột, mỗi cột chiếm 48% chiều rộng
    marginBottom: 16,
  },
  firstColumn: {
    marginLeft: '4%', // Khoảng cách bên trái giữa các cột
  }
});

export default memo(ListProduct);