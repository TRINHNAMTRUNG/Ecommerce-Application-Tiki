import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStore, faChevronRight, faTruck } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [isItemChecked, setIsItemChecked] = useState([false, false]);
    const [quantity, setQuantity] = useState([1, 1]);
    const productPrice = [150000, 200000];

    const handleCheckAll = () => {
        const newCheckedState = !isAllChecked;
        setIsAllChecked(newCheckedState);
        setIsItemChecked(isItemChecked.map(() => newCheckedState));
    };

    const updateQuantity = (index, delta) => {
        const newQuantity = [...quantity];
        newQuantity[index] = Math.max(1, newQuantity[index] + delta);
        setQuantity(newQuantity);
    };

    const handleRemoveProduct = (index) => {
        const newCheckedItems = [...isItemChecked];
        const newQuantities = [...quantity];
        newCheckedItems.splice(index, 1);
        newQuantities.splice(index, 1);
        setIsItemChecked(newCheckedItems);
        setQuantity(newQuantities);
    };

    return (
        <View>
            <View style={styles.headershop}>
                <CheckBox checked={isAllChecked} onPress={handleCheckAll} />
                <FontAwesomeIcon icon={faStore} style={styles.icon} color="blue" />
                <Text style={styles.label}>Tiki Trading</Text>
                <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
            </View>

            {isItemChecked.map((checked, index) => (
                <View key={index} style={[styles.container, styles.productBorder]}>
                   

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
                            <Text>
                                <Text style={styles.price}>{productPrice[index]}₫</Text>
                                <Text style={styles.originalPrice}>158.000đ</Text>
                            </Text>
                            <View style={styles.delivery}>
                                <FontAwesomeIcon icon={faTruck} />
                                <Text>Giao thứ 2, 28/10</Text>
                            </View>
                            <Text style={styles.bookcare}>Có thể bọc bằng Bookcare</Text>
                            <View style={styles.quantityContainer}>
                                <View style={styles.quantity}>
                                    <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(index, -1)}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>-</Text>
                                    </TouchableOpacity>
                                    <TextInput style={styles.quantityInput} value={String(quantity[index])} />
                                    <TouchableOpacity style={styles.quantityButton} onPress={() => updateQuantity(index, 1)}>
                                    <Text style={{ fontSize: 16,}}>+</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Nút "Xóa" nằm bên phải */}
                                <TouchableOpacity onPress={() => handleRemoveProduct(index)} style={styles.removeButton}>
                                    <Text style={styles.remove}>Xóa</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            ))}
            
            {/* PromoComponent content here */}
            <View style={styles.container}>
                <View style={styles.promoCode}>
                    <Icon name="tag" type="font-awesome" size={20} color="#007bff" style={styles.icon} />
                    <Text style={styles.text}>Thêm mã khuyến mãi của Shop</Text>
                    <Icon name="chevron-right" type="font-awesome" size={16} color="#888" />
                </View>
                <View style={styles.freeship}>
                    <Text style={styles.title}>
                        FREESHIP XTRA{' '}
                        <Icon name="info-circle" type="font-awesome" size={14} color="#007bff" />
                    </Text>
                    <Text style={styles.info}>
                        Freeship 15k đơn từ 45k, Freeship 70k đơn từ 100k
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingTop: 10,
    },
    headershop: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icon: {
        marginRight: 10,
    },
    label: {
        paddingRight: 10,
        fontWeight: 'bold',
    },
    productBorder: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    promo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    link: {
        color: '#007bff',
    },
    product: {
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    badges: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    badgeOfficial: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: 4,
        borderRadius: 4,
        marginRight: 4,
        fontSize: 12,
        textAlign: 'center'
    },
    badgeReturn: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: 4,
        borderRadius: 4,
        fontSize: 12,
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    price: {
        fontSize: 18,
        color: '#d9534f',
        marginRight: 5,
    },
    originalPrice: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        color: '#999',
    },
    delivery: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    bookcare: {
        color: '#888',
        fontSize: 12,
    },
    quantityContainer: {
        flexDirection: 'row', // Để các phần tử nằm ngang
        justifyContent: 'space-between', // Tách đều các phần tử
        alignItems: 'center', // Canh giữa dọc
        width: '100%',
    },
    quantity: {
        marginTop: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // Đặt độ rộng cho đường viền
        borderColor: '#ccc', // Đặt màu cho đường viền (khung)
        borderRadius: 4, // Đặt bo góc nếu cần
    },
    
    quantityButton: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        marginHorizontal: 5,
        borderRadius: 4,
      
    },
    quantityInput: {
        width: 30,
        textAlign: 'center',
        fontSize: 16,
    },
    removeButton: {
        marginLeft: 10, // Khoảng cách giữa nút xóa và các phần tử khác
        justifyContent: 'center',
    },
    remove: {
        marginTop: 10, 
        color: 'blue',
        fontSize: 14,
    },
    promoCode: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    text: {
        flexGrow: 1,
    },
    freeship: {
        padding: 10,
    },
    info: {
        color: '#555',
        marginBottom: 10,
    },
});

export default ShoppingCart;
