import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { dataCategory } from "../../data/dataObject";
const colors = ['#BFEFFF', '#FFF2D0', '#F6D2FF', '#FFEAD7', '#BCC5FF', '#CBFEFF', '#D6FFBF', '#FFEBF6', '#FFB2B2', '#D1C8FF'];


const ListCategory = () => {
    return (
        <View style={styleListCategory.LsCategoryContainer}>
            {dataCategory && dataCategory.length !== 0 && colors.length === dataCategory.length &&
                dataCategory.map((item, index) => {
                    return (
                        <View style={styleListCategory.cardCategory} key={`catg-${index}`}>
                            <TouchableOpacity >
                                <LinearGradient colors={[colors[index], '#FFFFFF']} style={styleListCategory.itemCategory}>
                                    <Image source={item.src} style={styleListCategory.imageCategory} />
                                </LinearGradient>
                            </TouchableOpacity>
                            <Text style={styleListCategory.nameCategory} numberOfLines={2}> {item.title} </Text>
                        </View>
                    )
                })
            }
        </View>
    );
}

const styleListCategory = StyleSheet.create({
    LsCategoryContainer: {
        width: "100%",
        maxHeight: 200,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        backgroundColor: "#FFFFFF",
        padding: 16,
        paddingBottom: 4,
        overflow: "hidden",
        overflow: "scroll"
    },
    itemCategory: {
        width: 50,
        height: 50,
        borderColor: "gray",
        borderWidth: 0.8,
        borderRadius: 7,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    imageCategory: {
        width: "67%",
        height: "67%",
    },
    cardCategory: {
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5
    },
    nameCategory: {
        textAlign: "center",
        flexWrap: 'wrap',
        width: 50,
        fontSize: 10,
        fontWeight: "500",
        marginBottom: 8,
        height: 25
    }
})

export default ListCategory;