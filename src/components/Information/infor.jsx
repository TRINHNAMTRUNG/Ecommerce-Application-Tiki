import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Infor = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông tin tài khoản</Text>
      </View>

    
      <View style={styles.profileContainer}>
        <View style={styles.profilePicture}>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/a1aa/image/5Qt36Kb1IvqqLh7Qc11jvcqdvHPPvl5eIbE38giaE9yL1k4JA.jpg',
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <FontAwesome5 name="pencil-alt" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 60,
    transform: [{ translateY: -12 }],
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 50, 
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -70,
  },
  profilePicture: {
    width: 150,
    height: 150,
    backgroundColor: '#E3F2FD',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#424242',
    borderRadius: 50,
    padding: 5,
  },
});

export default Infor;
