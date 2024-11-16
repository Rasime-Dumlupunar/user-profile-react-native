import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { UserContext } from '../context/UserContext';


const UserDetailScreen = () => {
  const navigation = useNavigation();
  //UserListScreen den id'yi useRoute üzerinden aldık 
  const route = useRoute();
  const {userId} = route.params;
 // useContext kullanarak userContext'e abone olduk 
  const {users} = useContext(UserContext);

  //user dizisi içerisinde userDetailScreen ekranına gönderdiğimiz id ile birleşen
  // veriyi getirdik
  const user = users.find(user => user.id === userId);
  console.log(user)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info} >{user.phone}</Text>
        <Button onPress={() => navigation.navigate('Task', {userId})}  title='Wiew Tasks' />
      </View>
    </View>
  )
}

export default UserDetailScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AA5486'
  },
  card: {
    backgroundColor: '#FBF4DB',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width:2, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  title: {
    fontSize: 23,
    fontWeight:'bold',
    marginBottom: 10,
    
  },
  info: {
    fontSize:15,
    marginBottom: 5,
  },
});