import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Address from '../../components/Cart/address';
import ContainerCart from '../../components/Cart/containerCart';
import Header from '../../components/Cart/header';

const CartPage = () => {
    return (  
        <View style={styles.container}>
            <Header/>

            <ContainerCart /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: '#fff',
    },
    scrollContainer: {
        
    },

});

export default CartPage;
