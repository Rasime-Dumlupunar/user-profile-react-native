import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';

const UserListScreen = () => {
  const navigation = useNavigation();
  // Contex'te abone olmak için useConteşt hook'u kullanılır. 
  // UseContext içine context'in verilerini getirir.
  const {loading, error, users} = useContext(UserContext);
  

  return (
    <View style={{flex:1, backgroundColor:'#FC8F54'}}>
    {  loading ? (
      <Loader />
    ) :  error ? (
    <Text>{error}</Text>
    ) : (
      <FlatList data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => navigation.navigate ('UserDetails', {userId: item.id})}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.email}</Text>
          </View>
        </TouchableOpacity>
    )}
      />
    )}
    </View>
  );
};

export default UserListScreen;


const styles = StyleSheet.create({
    item: {
      padding: 20,
      marginVertical: 8,
      backgroundColor: '#FDE7BB',
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
});