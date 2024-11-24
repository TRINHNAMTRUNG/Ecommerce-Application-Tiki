import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PriceDisplay from './priceDisplay'; // Import PriceDisplay component
import PromoComponentTotal from './promoTotal';
import Address from './address';
import ShoppingCart from './shoppingCart';


const ContainerCart = ({ navigation, cartItems, setTotalPrice }) => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isItemChecked, setIsItemChecked] = useState([false]);
    const [quantity, setQuantity] = useState([1]);
    const productPrice = [1];
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
        setTotalPrice(subtotal)
    }, [subtotal]);
    const handleRemoveProduct = (index) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có chắc chắn muốn xóa sản phẩm này không?',
            [
                { text: 'Hủy', style: 'cancel' },
                { text: 'Xóa', onPress: () => removeProduct(index) },
            ]
        );
    };

    const removeProduct = (index) => {
        const newCheckedItems = [...isItemChecked];
        const newQuantities = [...quantity];

        newCheckedItems.splice(index, 1);
        newQuantities.splice(index, 1);

        setIsItemChecked(newCheckedItems);
        setQuantity(newQuantities);
    };

    const updateQuantity = (index, change) => {
        const newQuantities = [...quantity];
        newQuantities[index] = Math.max(0, newQuantities[index] + change);

        if (newQuantities[index] === 0) {
            handleRemoveProduct(index);
        } else {
            setQuantity(newQuantities);
        }
    };

    const handleCheckAll = () => {
        const newCheckedState = isAllChecked ? isItemChecked.map(() => false) : isItemChecked.map(() => true);
        setIsItemChecked(newCheckedState);
        setIsAllChecked(!isAllChecked);
    };

    const calculateSubtotal = () => {
        return isItemChecked.reduce((total, checked, index) => {
            if (checked) {
                total += productPrice[index] * quantity[index];
            }
            return total;
        }, 0);
    };

    useEffect(() => {
        setSubtotal(calculateSubtotal());
    }, [isItemChecked, quantity]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Address />
                <View style={styles.header}>
                    <CheckBox checked={isAllChecked} onPress={handleCheckAll} />
                    <Text style={styles.label}>Tất cả ({isItemChecked.length} sản phẩm)</Text>
                    <TouchableOpacity onPress={() => handleRemoveProduct(0)}>
                        <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <ShoppingCart cartItems={cartItems} setSubtotal={setSubtotal} />

                <PriceDisplay subtotal={subtotal} discount={0} />
            </ScrollView>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingBottom: 150,
    },
    fixedPromoContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        left: 0,
        right: 0,
        shadowColor: '#000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    label: {
        flexGrow: 1,
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 10
    },
});

export default ContainerCart;
