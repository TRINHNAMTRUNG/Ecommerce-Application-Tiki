import { useEffect, useRef } from "react";
import { View, TouchableOpacity, TextInput, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CardProduct from "./cardProduct";
const ListProduct = ({ dataProduct }) => {

    return (
        <FlatList
            style={stylesListProduct.containerListProduct}
            data={dataProduct}
            renderItem={({ item }) => <CardProduct product={item} />}
            keyExtractor={(item) => `prod-${item.id}`}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        />
    );
}

const stylesListProduct = StyleSheet.create({
    containerListProduct: {
        width: "100%",
        height: 304,
        borderRadius: 10,
        flexDirection: "row",
        padding: 8
    },

});

export default ListProduct;
