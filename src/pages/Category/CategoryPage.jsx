import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Category/header';
import OfferComponent from '../../components/Category/offer'
import Sidebar from '../../components/Category/sidebar'
const CategoryPage = () => {
    return (
        <View style={styles.container}>
            <Header />
            <OfferComponent/>
            <Sidebar/>
        </View>
    );
};

const styles = StyleSheet.create({
  
});

export default CategoryPage;
