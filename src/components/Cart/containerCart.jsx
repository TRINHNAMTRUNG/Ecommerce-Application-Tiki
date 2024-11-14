import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faStore, faChevronRight, faTruck } from '@fortawesome/free-solid-svg-icons';
import PriceDisplay from './priceDisplay'; // Import PriceDisplay component
import PromoComponent from './promo';
import PromoComponentTotal from './promoTotal';
import Address from './address';

const ContainerCart = () => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isItemChecked, setIsItemChecked] = useState([false]); 
    const [quantity, setQuantity] = useState([1]);
    const productPrice = [99000];
    const [subtotal, setSubtotal] = useState(0); 

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
            <View>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Address/>
                <View style={styles.header}>
                    <CheckBox checked={isAllChecked} onPress={handleCheckAll} />
                    <Text style={styles.label}>Tất cả ({isItemChecked.length} sản phẩm)</Text>
                    <TouchableOpacity onPress={() => handleRemoveProduct(0)}>
                        <FontAwesomeIcon icon={faTrashAlt} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.headershop}>
                    <CheckBox checked={isAllChecked} onPress={handleCheckAll} />
                    <FontAwesomeIcon icon={faStore} style={styles.icon} color='blue' />
                    <Text style={styles.label}>Tiki Trading</Text>
                    <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
                </View>

                {isItemChecked.map((checked, index) => (
                    <View key={index} style={[styles.container, styles.productBorder]}>
                        <View style={styles.promo}>
                            <Text>Mua thêm 2, giảm 5%</Text>
                            <TouchableOpacity>
                                <Text style={styles.link}>Chọn sản phẩm</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.product}>
                            <CheckBox
                                checked={checked}
                                onPress={() => {
                                    const newCheckedItems = [...isItemChecked];
                                    newCheckedItems[index] = !newCheckedItems[index];
                                    setIsItemChecked(newCheckedItems);
                                }}
                            />
                            <Image 
                                style={styles.image}
                                source={{ uri: 'https://storage.googleapis.com/a1aa/image/Lt9xp3aF5oJvMhf2JiEIqbvPE9Q951n3VcHCpnlRMe6P08pTA.jpg' }} 
                            />
                            <View style={styles.productDetails}>
                                <View style={styles.badges}>
                                    <Text style={styles.badgeOfficial}>CHÍNH HÃNG</Text>
                                    <Text style={styles.badgeReturn}>30 NGÀY ĐỔI TRẢ</Text>
                                </View>
                                <Text style={styles.title}>25 Độ Âm</Text>
                                <Text style={styles.productDetails}> 
                                    <Text style={styles.price}>{productPrice[index]}₫</Text>
                                    <Text style={styles.originalPrice}>158.000đ</Text>
                                </Text>
                                <View style={styles.delivery}>
                                    <FontAwesomeIcon icon={faTruck} />
                                    <Text>Giao thứ 2, 28/10</Text>
                                </View>
                                <Text style={styles.bookcare}>Có thể bọc bằng Bookcare</Text>
                                <View style={styles.quantity}>
                                    <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(index, -1)}><Text>-</Text></TouchableOpacity>
                                    <TextInput style={styles.quantityInput} value={String(quantity[index])} />
                                    <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(index, 1)}><Text>+</Text></TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleRemoveProduct(index)}>
                                        <Text style={styles.remove}>Xóa</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

                <PromoComponent />
                <PriceDisplay subtotal={subtotal} discount={0} />
            </ScrollView>
            </View>
        
            <View style={styles.fixedPromoContainer}>
                <PromoComponentTotal subtotal={subtotal} quantity={quantity.reduce((a, b) => a + b, 0)} />
            </View>
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
    shadowOffset: {
        width: 0,
        height: 2,  
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headershop: {
        flexDirection: 'row',
        alignItems: 'center',  
    },
    label: {
        flexGrow: 1,
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 10
    },
    productBorder: {
        borderColor: '#FF6600', 
        borderWidth: 1,        
        borderRadius: 8,
        marginLeft: 2,
        marginRight: 2,
        paddingBottom: 10,         
    },
    promo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffe4b2',
        padding: 16,
        borderTopLeftRadius: 8,  
        borderTopRightRadius: 8,  
        marginBottom: 10,
    },
    link: {
        color: 'blue',
    },
    product: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    image: {
        width: 60,
        height: 80,
        marginRight: 16,
    },
    productDetails: {
        flexGrow: 1,
    },
    badges: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    badgeOfficial: {
        backgroundColor: 'green',
        color: 'white',
        padding: 2,
        borderRadius: 3,
        marginRight: 5,
    },
    badgeReturn: {
        backgroundColor: 'orange',
        color: 'white',
        padding: 2,
        borderRadius: 3,
        marginRight: 5,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        color: 'red',
        fontWeight: 'bold',
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        marginLeft: 10,
    },
    delivery: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    bookcare: {
        marginBottom: 10,
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        color: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5,
  
    },
    quantityInput: {
        width: 40,
        height: 30,
        borderWidth: 1,
        borderColor: '#ddd',
        textAlign: 'center',
 
    },
    remove: {
        color: 'blue',
        marginLeft: 10,
        marginLeft: 90,
    },
});

export default ContainerCart;
