import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable, Animated, FlatList} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';

function Favorite({navigation}) {
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.text1}>U-Dictionary</Text>
    </View>
    <Pressable style={styles.translate}>

    </Pressable>
    <View style={styles.options}>

    </View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  text1:{
    width:180,
    height: 45,
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    color:'#fff',
    textAlign: 'left',
    marginBottom: 20
  },
  translate:{
    width: 370,
    height: 150,
    borderWidth: 2,
    borderColor: '#81BEE0',
    borderRadius: 20
  },
  options:{

  },
});
export default Favorite;