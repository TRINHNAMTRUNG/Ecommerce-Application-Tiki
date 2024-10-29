import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTags, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const PromoComponentTotal = ({ subtotal, quantity }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <FontAwesomeIcon icon={faTags} color="#1a73e8" style={styles.icon} />
                    <Text>Tiki khuyến mãi</Text>
                </View>
                <View style={styles.promo}>
                    <Text style={styles.promoText}>
                        Chọn hoặc nhập mã 
                    </Text>
                    <FontAwesomeIcon icon={faAngleRight} size={20} color="#666666" style={styles.icon} />
                </View>
            </View>
            <View style={styles.content}>
                <Text>Mua thêm để freeship 70k cho đơn từ 100k</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.total}>
                        {formatCurrency(subtotal)} 
                    </Text>
                    <Text style={styles.savings}>Tiết kiệm {formatCurrency(calculateSavings(subtotal))}</Text>
                </View>
                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Mua Hàng ({quantity})</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const calculateSavings = (subtotal) => {
    return subtotal < 100000 ? 58460 : 0; // trả về số tiền tiết kiệm thực tế
};

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 16,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
     
        
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    promo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    promoText: {
        color: 'grey',
        fontSize: 12,
    },
    content: {
        marginTop: 8,
        fontSize: 14,
        color: '#757575',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    total: {
        fontSize: 16,
        color: '#d32f2f',
    },
    savings: {
        fontSize: 12,
        color: '#388e3c',
    },
    buyButton: {
        backgroundColor: '#ff5252',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buyButtonText: {
        color: 'white',
    },
});

export default PromoComponentTotal;
