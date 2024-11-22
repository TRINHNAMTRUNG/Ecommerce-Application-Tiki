import React, { memo, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';

import FrameAddress from '../../components/Home/frameAddress.jsx';
import BarSearch from '../../components/Home/barSearch.jsx';
import { getSearchProduct } from "../../services/productService.js";
import SuggestedProducts from '../../components/Home/suggestedProduct.jsx';

const { height } = Dimensions.get("window");

const SearchPage = ({ route }) => {
    let dataSearch = {};
    if (route.params && route.params.dataSearch) {
        dataSearch = route.params.dataSearch;
    }
    const [listPipelineSec, setListPipelineSec] = useState(dataSearch ? dataSearch.data : []);
    const [page, setPage] = useState(2);
    const [maxPage, setMaxPage] = useState(dataSearch.maxPage);
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreData = async () => {
        // Nếu đã tải xong hoặc đang tải, không thực hiện gì
        if (isLoading || page > maxPage || !dataSearch?.data) {
            return;
        }
        setIsLoading(true);

        try {
            const newData = await getSearchProduct(page, false);
            setListPipelineSec((prev) => [...prev, ...newData.data.listProduct]);
            setMaxPage(newData.data.totalPages);
            setPage((prev) => prev + 1);
        } catch (error) {
            console.error("Error loading more data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const keepSearching = (dataSearch) => {
        setListPipelineSec(dataSearch.data);
        setMaxPage(dataSearch.maxPage);
    }
    return (
        <View style={{ flex: 1 }}>
            <BarSearch isFixed={true} keepSearching={keepSearching} />
            {listPipelineSec.length > 0 ?
                <FlatList
                    style={stylesHomePage.frameContainer}
                    onEndReached={loadMoreData}
                    onEndReachedThreshold={0.1}
                    ListHeaderComponent={
                        <View style={stylesHomePage.frameHeader}>
                            <FrameAddress />
                        </View>
                    }
                    ListFooterComponent={listPipelineSec.length > 0 &&
                        <View>
                            <SuggestedProducts listPipelineSec={listPipelineSec} isLoading={isLoading} namePipeline={dataSearch.namePipeline} />
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                />
                :
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", height: height }}>
                        <Image source={require("../../assets/thumb/notFoundProd.png")} style={{ height: "20%", width: "100%" }} />
                    </View>
                </ScrollView>
            }
        </View>
    );
};

const stylesHomePage = StyleSheet.create({
    frameContainer: {
        width: "100%",
        flexDirection: "column",
        flex: 1,
    },
    frameHeader: {
        flex: 1.8,
        position: "relative",
        alignItems: "center",
        backgroundColor: "white",
        paddingBottom: 5,
        marginTop: 100
    },
    imageHeader: {
        position: "absolute",
        height: "65%",
        width: "100%",
        top: 0,
        borderBottomRightRadius: 85,
        borderBottomLeftRadius: 85,
    },
});

export default memo(SearchPage);
