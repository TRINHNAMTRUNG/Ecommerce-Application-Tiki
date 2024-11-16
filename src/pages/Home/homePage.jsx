import React, { memo, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Text, TextInput, FlatList, VirtualizedList } from 'react-native';

import SlideAvertisement from '../../components/Home/slideAvertisement.jsx';
import ListCategory from '../../components/Home/listCategory.jsx';
import FrameAddress from '../../components/Home/frameAddress.jsx';
import BarSearch from '../../components/Home/barSearch.jsx';

import { dataAdvertisement, dataProduct } from '../../data/dataObject.js';
import ListProduct from '../../components/Home/listProduct.jsx';
import { getListTopDeal } from "../../services/productService.js";

const HomePage = ({ navigation }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [listTopDeal, setListTopDeal] = useState([]);
  useEffect(() => {
    fetchListTopDeal();
  }, []);
  const fetchListTopDeal = async () => {
    try {
      const res = await getListTopDeal();
      if (res.data && res.success === true) {
        setListTopDeal(res.data); // nếu dữ liệu bạn cần nằm trong res.data.data
      }
    } catch (error) {

    }
  }


  const handleScroll = (e) => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    if (scrollPosition > 200) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  return (
    <>
      {isFixed && <BarSearch isFixed={isFixed} />}
      <ScrollView style={stylesHomePage.frameContainer} onScroll={(e) => handleScroll(e)} scrollEventThrottle={16}>
        <View style={stylesHomePage.frameHeader}>
          <Image source={require("../../assets/thumb/backgr_image.png")} style={stylesHomePage.imageHeader} />
          {isFixed === false && <BarSearch isFixed={isFixed} />}
          <SlideAvertisement
            dataAdvertisement={dataAdvertisement}
            isFixed={isFixed}
          />
        </View>

        <View style={stylesHomePage.frameBody}>
          <ListCategory />
          <FrameAddress />
          <View style={stylesHomePage.frameListProducts}>
            <ListProduct listTopDeal={listTopDeal} showHorizon={true} />
          </View>
          <View style={stylesHomePage.frameListProducts}>
            <ListProduct listTopDeal={listTopDeal} showHorizon={true} />
          </View>
          <View style={stylesHomePage.frameListProducts}>
            <ListProduct listTopDeal={listTopDeal} showHorizon={true} />
          </View>
          <View style={stylesHomePage.frameListProducts}>
            <ListProduct listTopDeal={listTopDeal} showHorizon={false} />
          </View>

        </View>
      </ScrollView >
    </>

  );
}

const stylesHomePage = StyleSheet.create({
  frameContainer: {
    width: "100%",
    flexDirection: "column",
    flex: 1
  },
  frameHeader: {
    flex: 1.8,
    position: "relative",
    alignItems: "center",
  },
  frameListProducts: {

  },
  imageHeader: {
    position: "absolute",
    height: "65%",
    width: "100%",
    top: 0,
    borderBottomRightRadius: 85,
    borderBottomLeftRadius: 85,
  },
  slide: {
    width: 310,
    height: 150,
  },
  frameBody: {
    flex: 2,
    // alignItems: "center"
  }
});

export default memo(HomePage);