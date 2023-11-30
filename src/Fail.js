import React,{ useEffect } from 'react';
import { StyleSheet,ScrollView,View, Text,Image,Pressable } from 'react-native';

function Fail_Screen({navigation}) {
  
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 372,
          height: 225,
        }}
        source={require('../image/404.png')}
      />
      <Text style={styles.text1}>Sorry, we have not update yet :( </Text>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    width: 300,
    height: 74,
    textAlign: 'center',
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    color:'#fff',
    marginBottom: 15
  },
});
export default Fail_Screen;
