import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PromoHeader = ({navigation}) => {

    return (
        <View style={styles.header}>
            <FontAwesomeIcon icon={faChevronLeft} size={20} color="#ffffff" style={styles.icon}/>
            <Text style={styles.title}>Mã Khuyến Mãi</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00aaff',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center', 
        paddingTop: 36,
        paddingLeft: 10,
        paddingRight: 10, 
    },
    icon: {
        marginRight: 10,
    },
    title: {
        flex: 1, 
        fontSize: 20,
        color: 'white',
        textAlign: 'center', 
    },
});

export default PromoHeader;
