import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Infor from '../../components/Information/infor';
import ProfileInfo from '../../components/Information/containInfor'
const InforPage = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Infor />
            <ProfileInfo />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  
});

export default InforPage;
