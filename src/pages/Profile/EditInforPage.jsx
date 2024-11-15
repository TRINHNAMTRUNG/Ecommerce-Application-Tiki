import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import EditInputScreen from '../../components/Information/editInfor';

const CategoryPage = () => {
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <EditInputScreen />
    
    </ScrollView>
    );
};

const styles = StyleSheet.create({
  
});

export default CategoryPage;
