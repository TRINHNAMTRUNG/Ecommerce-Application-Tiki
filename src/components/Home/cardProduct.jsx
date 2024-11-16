import { Image, Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import image from "../../assets/thumb/backgr_image.png"
import { useNavigation } from '@react-navigation/native';
import { AirbnbRating } from "react-native-ratings";
import { memo } from "react";

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
};

const CardProduct = ({ product }) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styleCardProduct.containerCard} onPress={() => { navigation.navigate("productDetail", { product }) }}>
            <View style={styleCardProduct.frameImage}>
                <Image source={{ uri: product.images[0] }} style={styleCardProduct.imageProd} />
            </View>
            <View style={styleCardProduct.frameContent}>
                <Text style={styleCardProduct.frameTitle} numberOfLines={2} ellipsizeMode='tail'>{product.name}</Text>
                <View style={styleCardProduct.frameRating}>
                    <AirbnbRating
                        count={5}
                        size={14}
                        defaultRating={product.ratingAverage}
                        showRating={false}
                        starContainerStyle={{ alignSelf: "flex-start" }}
                    />
                </View>
                <Text style={styleCardProduct.textPrice}>{formatCurrency(product.price * 0.45)} VND</Text>
                <View style={styleCardProduct.wrapDiscount}>
                    <Text style={styleCardProduct.textDiscount}>-45%</Text>
                    <Text style={styleCardProduct.textOriginalPrice}> {formatCurrency(product.price)} VND</Text>
                </View>
            </View>
            <View style={styleCardProduct.frameType}>
                <Text style={styleCardProduct.textType}>Giao siêu tốc 2h</Text>
            </View>

        </Pressable>
    );
}

const styleCardProduct = StyleSheet.create({
    containerCard: {
        width: 150,
        height: "100%",
        minHeight: 300,
        marginRight: 10,
        borderRadius: 10,
        padding: 8,
        backgroundColor: "white",
        borderColor: "#f2f2f2",
        borderWidth: 1.5,
    },
    frameImage: {
        height: 120,
        marginBottom: 8
    },
    frameContent: {
        flex: 1
    },
    frameType: {
        flex: 0.17,
        justifyContent: "flex-end",
        borderTopWidth: 1,
        borderColor: "#f2f2f2"
    },
    imageProd: {
        width: "100%",
        height: "100%",
        borderRadius: 5
    },
    frameTitle: {
        fontSize: 13,
        fontWeight: "400",
        marginBottom: 4,
    },
    frameRating: {
        height: 18,
        marginBottom: 4
    },
    textPrice: {
        color: "#FF424E",
        fontWeight: "500",
        marginBottom: 4,
        fontSize: 16
    },
    wrapDiscount: {
        flex: 0.6,
        flexDirection: "row",
        alignItems: "center"
    },
    textDiscount: {
        padding: 4,
        borderRadius: 8,
        fontSize: 12,
        fontWeight: "700",
        backgroundColor: "#F4F4F9",
        marginRight: 4,
        minWidth: 32,
        textAlign: "center"
    },
    textOriginalPrice: {
        fontSize: 12,
        fontWeight: "400",
        textDecorationLine: "line-through",
        color: "gray",
        textDecorationColor: "gray",
        padding: 4,
    },
    textType: {
        fontSize: 10,
        fontWeight: "400",
        color: "#808089"
    }
});
export default memo(CardProduct);