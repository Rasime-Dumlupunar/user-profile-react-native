import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={'large'} color={'#000000'}/>
    </View>
  )
}

export default Loader;

const styles = StyleSheet.create({
    loading: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
});