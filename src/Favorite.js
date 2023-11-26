import { StyleSheet, Text, View, Image} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';

function Favorite({navigation}) {
  return (
  <View style={styles.container}>
    <View style={{flex:2,flexDirection:'row'}}>
        <Text style={styles.text1}>Favorite</Text>
      
    </View> 
    <View style={{flex:2,height:110,alignItems:'center'}}>
      <Text style={styles.text2}>Bạn chưa thêm bất cứ thứ gì </Text>
      <Text style={styles.text3}>Nhấp vào ngôi sao để thêm vào mục Yêu Thích</Text>
    </View>
    <View style={{flex:5}}>
      <View style={styles.box}>
        <View style={styles.boxI}>
          <Text style={styles.text4}>hello</Text>
          <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(152, 145, 145, 0.8)',width:232 }} />
          <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <View style={styles.boxM}></View>
            <View style={styles.boxM}></View>
          </View>
          <Text style={styles.text4}>hola</Text>
          <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <View style={styles.boxC}></View>
            <View style={styles.boxC}></View>
            <View style={styles.boxCB}>
              <Image style={{height:29,width:29}} source={require('../image/Star.png')}/>
            </View>
          </View>
        </View>
      </View>
    </View>    
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  text1:{
    fontFamily:'SVN-Gilroy',
    fontSize:32,
    fontWeight:700,
    color:'#fff',
  },
  text2:{
    color:'rgba(252, 249, 249, 0.80)',
    fontFamily:'SVN-Gilroy',
    fontSize:23,
    fontWeight:700,
  },
  text3:{
    color:'rgba(204, 204, 204, 0.80)',
    fontFamily:'SVN-Gilroy',
    fontSize:17,
    fontWeight:700,
    marginVertical:20
  },
  text4:{
    color:'rgba(204, 204, 204, 0.80)',
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    marginTop:10
  },
  box:{
    height:231,
    width:328,
    borderRadius:23,
    backgroundColor:'#2D2D2F',
    padding:32
  },
  boxI:{
    height:200,
    width:235,
    backgroundColor:'#2D2D2F',
  },
  boxM:{
    width:59,
    height:20,
    borderRadius:42,
    backgroundColor:'#323232',
    marginTop:10,
    marginRight:10
  },
  boxC:{
    width:30,
    height:30,
    borderRadius:42,
    backgroundColor:'#323232',
    marginTop:10,
    marginRight:10
  },
  boxCB:{
    width:55,
    height:55,
    borderRadius:42,
    backgroundColor:'#323232',
    marginBottom:30,
    marginRight:10,
    alignItems:'center',
    padding:12
  },
});
export default Favorite;