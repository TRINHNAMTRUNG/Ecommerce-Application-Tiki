import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import EditInputScreen from '../../components/Information/editInfor';

const EditInforPage = () => {
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <EditInputScreen />
    
    </ScrollView>
    );
};

const styles = StyleSheet.create({
  
});

export default EditInforPage;
