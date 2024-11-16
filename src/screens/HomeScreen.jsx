import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#AA5486', flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={{ backgroundColor: '#FBF4DB', padding: 20, borderRadius: 20}} 
      onPress={()=> navigation.navigate('UserList')}>
        <Text style={{ fontSize: 20 }}> Show User List </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;