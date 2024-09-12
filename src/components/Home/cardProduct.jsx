import { Image, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import image from "../../assets/thumb/backgr_image.png"
const CardProduct = ({ product }) => {
    return (
        <View style={styleCardProduct.containerCard}>
            <View style={styleCardProduct.frameImage}>
                <Image source={require = image} style={styleCardProduct.imageProd} />
            </View>
            <View style={styleCardProduct.frameContent}>
                <Text style={styleCardProduct.frameTitle} numberOfLines={2} ellipsizeMode='tail'>{product.title}</Text>
                <View style={styleCardProduct.frameRating}>

                </View>
                <Text style={styleCardProduct.textPrice}>{product.price} VND</Text>
                <View style={styleCardProduct.wrapDiscount}>
                    <Text style={styleCardProduct.textDiscount}>{product.discount}%</Text>
                    <Text style={styleCardProduct.textOriginalPrice}>{product.originalPrice} VND</Text>
                </View>
            </View>
            <View style={styleCardProduct.frameType}>
                <Text style={styleCardProduct.textType}>Giao siêu tốc 2h</Text>
            </View>

        </View>
    );
}

const styleCardProduct = StyleSheet.create({
    containerCard: {
        width: 150,
        height: "100%",
        marginRight: 10,
        borderRadius: 10,
        padding: 8,
        backgroundColor: "#ccf4f7"
    },
    frameImage: {
        flex: 1,
        marginBottom: 8
    },
    imageProd: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    frameContent: {
        flex: 1
    },
    frameType: {
        flex: 0.25,
    },
    frameTitle: {
        fontSize: 12,
        fontWeight: "400",
        marginBottom: 4
    },
    frameRating: {
        height: 18,
        backgroundColor: "pink",
        marginBottom: 4
    },
    textPrice: {
        color: "#FF424E",
        fontWeight: "700",
        marginBottom: 4
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
        backgroundColor: "#F4F4F9"
    },
    textOriginalPrice: {
        fontSize: 10,
        fontWeight: "400",
        textDecorationLine: "line-through",
        color: "gray",
        textDecorationColor: "gray",
        padding: 4,
    },
    textType: {
        fontSize: 10,
        fontWeight: 400,
        color: "#808089"
    }
});
export default CardProduct;