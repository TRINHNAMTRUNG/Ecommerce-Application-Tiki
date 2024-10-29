import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'; // Correct Icon import from React Native Elements
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faStore, faChevronRight, faTruck } from '@fortawesome/free-solid-svg-icons'; // These icons are not used in the code

const PromoComponent = () => {
    return (
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
    },
    promoCode: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flexGrow: 1,
    },
    freeship: {
        padding: 10,
    },
    title: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    info: {
        color: '#555',
        marginBottom: 10,
    },
});

export default PromoComponent;
