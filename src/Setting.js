import React,{ useEffect } from 'react';
import { StyleSheet,ScrollView,View, Text,Image,Pressable } from 'react-native';

function Setting({navigation}) {
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Pressable onPress={() => {
          navigation.navigate('More')
          }}
          style={{width: 70,height: 40}}>
          <Image style={styles.img1} source={require('../image/arrows-icon-left.png')}/>
        </Pressable>
          <Text style={styles.text1}>Setting</Text>
      </View>
      
    </View>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    flex:2,
    height:'100%',
    width:'100%',
    flexDirection:'row',
    marginVertical:10,
    backgroundColor: '#0d0d0d',
  },
  body:{
    flex:8,
    width:'100%',
    flexDirection:'column',
    justifyContent:'center',
    marginHorizontal:30
  },
  img1:{
    height:21,
    width:25,
    resizeMode:'contain',
    marginLeft:20,
    marginRight:40,
    marginVertical:10
  },
  text1:{
    color:'#fff',
    fontFamily:'SVN-Gilroy',
    fontSize:25,
    fontWeight:700,
    marginVertical:5
  },
  image:{
    width:309,
    height:498,
    borderRadius:39,
  },
  text2:{
    color:'#8F8A8A',
    fontFamily:'SVN-Gilroy',
    fontSize:20,
    fontWeight:700,
    paddingRight:15,
    marginVertical:5
  },
  text3:{
    color:'#8F8A8A',
    fontFamily:'SVN-Gilroy',
    fontSize:20,
    fontWeight:700,
    marginTop:8
  }

});
export default Setting;
