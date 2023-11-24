import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable, Animated, FlatList} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';


const DATA = [
    {
      id: '1',
      title: 'Cài đặt',
      icon: require('../image/setting.png'),
    },
    {
      id: '2',
      title: 'Xếp hạng',
      icon: require('../image/like.png'),
    },
    {
      id: '3',
      title: 'Phản hồi',
      icon: require('../image/info_white.png'),
    },
    {
      id: '4',
      title: 'Khảo sát sự hài lòng',
      icon: require('../image/star-icon.png'),
    },
    {
      id: '5',
      title: 'Chia sẻ',
      icon: require('../image/share.png'),
    },
    {
      id: '6',
      title: 'Chính sách Bảo mật',
      icon: require('../image/book.png'),
    }
  ];

function More({navigation}) {

  return (
  <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.text1}>More</Text>
      <Text style={styles.text2}>Nhiều tính năng hơn</Text>
    </View>
    <View style={styles.body} >
    {DATA.map((item) => {
        return ( 
          <View key = { item.id } style={{flex:1,flexDirection:'row',height:60,width:350,marginVertical:20,justifyContent:'space-between'}}> 
            <View style={{width:30,marginRight:10}}>
              <Image style = {styles.image} 
              source = {{ uri: item.icon }} />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
              <Text style={styles.text3}>{item.title}</Text>
            </View>
            <View style={{width:40,marginTop:5}}>
              <Image style={styles.image} source={require('../image/next.png')}/>
            </View>
            
          </View>
        
        )
        }) 
      } 
    </View>
    <View style={{flex:3}}></View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },  
  head:{
    flex:1.5,
    width: 200, 
    height: 90,
    padding:20
  },
  body:{
    flex:6,
    flexDirection:'column',
    justifyContent:'center',
    marginHorizontal:20
  },
  text1:{
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    color:'#fff',
    marginBottom: 15
  },
  text2:{
    fontFamily:'SVN-Gilroy',
    fontSize:17,
    fontWeight:300,
    color:'#9B9B9B',
    marginBottom: 20
  },
  text3:{
    fontFamily:'SVN-Gilroy',
    fontSize:17,
    fontWeight:300,
    color:'#fff',
    
  },
  image:{
    height:25,
    width:25,
    resizeMode:'contain',

  }

});
export default More;