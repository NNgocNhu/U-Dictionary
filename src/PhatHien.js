import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable,ScrollView ,Animated , FlatList} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';
const COLORS = {
  January: '#4169E1',
  February: '#33FF57',
  March: '#5733FF',
  April: '#FF3366',
  May: '#FF1493',
  June: '#FFD700',
  July: '#33FFCC',
  August: '#8A2BE2',
  September: '#FF1493',
  October: '#7CFC00',
  November: '#32CD32',
  December: '#FF4500',
};

const DATA = [
  {
    id: '1',
    title: 'January',
    color: COLORS.January,
  },
  {
    id: '2',
    title: 'February',
    color: COLORS.February,
  },
  {
    id: '3',
    title: 'March',
    color: COLORS.March,
  },
  {
    id: '4',
    title: 'April',
    color: COLORS.April,
  },
  {
    id: '5',
    title: 'May',
    color: COLORS.May,
  },
  {
    id: '6',
    title: 'June',
    color: COLORS.June,
  },
  {
    id: '7',
    title: 'July',
    color: COLORS.July,
  },
  {
    id: '8',
    title: 'August',
    color: COLORS.August,
  },
  {
    id: '9',
    title: 'September',
    color: COLORS.September,
  },
  {
    id: '10',
    title: 'October',
    color: COLORS.October,
  },
  {
    id: '11',
    title: 'November',
    color: COLORS.November,
  },
  {
    id: '12',
    title: 'December',
    color: COLORS.December,
  },
];

const dataVideo = [
  {
    id: '1',
    image: require('../image/image1.png'),
    text1: 'Word: Achievement',
    text2: 'Video',
    text3: '17 Nov',
  },
  {
    id: '2',
    image: require('../image/image2.png'),
    text1: 'Word: Affable',
    text2: 'Video',
    text3: '16 Nov',
  },
];
const Item = ({ title, backgroundColor }) => (
  <View style={{  flexDirection: 'row', justifyContent: 'center',marginRight:10 }}>
    <View style={{ width: 72, height: 85, backgroundColor, flexDirection: 'column', padding: 10 }}>
      <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text style={styles.text3}>Spelling Check</Text>
      </View>
      <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={styles.text4}>QUIZ</Text>
      </View>
    </View>
    <View style={{ height: 85, width: 201, backgroundColor: 'rgba(90, 84, 84, 0.60)', padding: 15 }}>
      <View>
        <Text style={styles.text3}>Which Spelling Is Correct?</Text>
      </View>
      <View style={{ paddingTop: 12 }}>
        <Text style={styles.text4}>{title}</Text>
      </View>
    </View>
  </View>
);
const ItemVideo = ({ item }) => (
  <View style={{ flexDirection: 'column', justifyContent: 'space-around',marginHorizontal:10 }}>
    <View style={{ flex: 2 }}>
      <Image source = {{ uri: item.image }} style={{ width: 149, height: 85, resizeMode: 'contain' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={styles.text5}>{item.text1}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.text6}>{item.text2}</Text>
        <Text style={styles.text6}>{item.text3}</Text>
      </View>
    </View>
  </View>
);
function PhatHien({navigation}) {
  
  return (
  <ScrollView>
  <View style={styles.container}>
    <View style={{flex:1}}>
      <Text style={styles.text1}>Phát hiện</Text>
    </View>
    <View style={{ flex: 3, height: 193}}>
      <Text style={styles.text2}>Trò chơi ô chữ </Text>
      <Image style={styles.img1} source={require('../image/TroChoiOChu.jpg')}/>
    </View>
    <View style={{flex:3,height:154,marginTop:45}}>
      <Text style={styles.text2}>Trích dẫn hôm nay</Text>
      <Pressable style={{width: 314,height: 107}}
        onPress={() => {
          navigation.navigate('')
      }}>
        <Image style={styles.img2} source={require('../image/TrichDanHomNay.jpg')}/>
      </Pressable>
      
    </View>
       
    <View style={{flex:3,height:145,marginTop:10}}>
      <View style={{alignItems:'center'}}>
        <Text style={[styles.text2,{paddingRight:150}]}>Kiểm tra chính tả</Text>
      </View>
      <View style={{ paddingHorizontal:10 }}>
    <FlatList
      horizontal
      data={DATA}
      style={{ width: 310 }}
      contentContainerStyle={{ alignItems: 'center' }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Item title={item.title} backgroundColor={item.color} />}
      keyExtractor={(item) => item.id}
    />
  </View>
    </View>
    <View style={{flex:4}}>
      <Text style={[styles.text2,{marginLeft:12}]}>Góc tiếng anh </Text>
      <FlatList
      data={dataVideo}
      renderItem={({ item }) => <ItemVideo item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
     />
    </View>
  </View>
  </ScrollView>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    fontFamily:'SVN-Gilroy',
    fontSize:20,
    fontWeight:700,
    color:'#fff',
    marginBottom:7,
  },
  text3:{
    color:'rgba(204, 204, 204, 0.80)',
    fontFamily: 'SVN-Gilroy',
    fontSize:13,
    fontWeight:700
  },
  text4:{
    fontFamily:'SVN-Gilroy',
    fontSize:21,
    fontWeight:700,
    color:'#fff',
  },

  text5:{
    color:'rgba(251, 247, 247, 0.80)',
    fontFamily: 'SVN-Gilroy',
    fontSize:16,
    fontWeight:700
  },
  text6:{
    color:'#fff',
    fontFamily: 'SVN-Gilroy',
    fontSize:16,
    fontWeight:300
  },
  img1:{
    width: 304,
    height: 139,
  },
  img2:{
    width: 314,
    height: 107,
  },
  overlay: {
    color:'#000'
  },

});
export default PhatHien;