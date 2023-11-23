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

  const Item = ({title, icon}) => (
    <View style={{flex:1, flexDirection: 'row'}}>
        <Image style={{width: 25, height: 25, marginRight: 5}} source={icon}/>
        <Text>{title}</Text>
        <Image style={{width: 25, height: 25, justifyContent:'flex-end'}} source={(require('../image/next.png'))}/>
    </View>
  );
function More({navigation}) {

  return (
  <View style={styles.container}>
    <View style={{width: 177, height: 86}}>
      <Text style={styles.text1}>More</Text>
      <Text style={styles.text2}>Nhiều tính năng hơn</Text>
    </View>
    <View>
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title}/>}
            keyExtractor={item => item.id}
        />
    </View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },  
  text1:{
    width:180,
    height: 45,
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    color:'#fff',
    marginBottom: 20
  },
  text2:{
    width:180,
    height: 45,
    fontFamily:'SVN-Gilroy',
    fontSize:17,
    fontWeight:300,
    color:'#9B9B9B',
    textAlign: 'center',
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
export default More;