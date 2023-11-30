import { StyleSheet, Text, View, Image, Pressable, ScrollView ,Linking , FlatList} from 'react-native';
import React, { useState, useEffect } from 'react';

const dataVideo = [
  {
    id: '1',
    image: require('../image/imgVideo1.jpg'),
    text1: 'Word: Achievement',
    text2: 'Video',
    text3: '25 Nov',
    link:'https://www.youtube.com/watch?v=Io7lKH1kPSE'
  },
  {
    id: '2',
    image: require('../image/imgVideo2.jpg'),
    text1: 'Word: Affable',
    text2: 'Video',
    text3: '24 Nov',
    link:'https://www.youtube.com/watch?v=iinyufglRQE'
  },
  {
    id: '3',
    image: require('../image/imgVideo3.jpg'),
    text1: 'Word: Success',
    text2: 'Video',
    text3: '23 Nov',
    link:'https://www.youtube.com/watch?v=lX1Wa2J2OYE'
  },
  {
    id: '4',
    image: require('../image/imgVideo4.jpg'),
    text1: 'Word Finesse',
    text2: 'Video',
    text3: '22 Nov',
    link:'https://www.youtube.com/watch?v=lEjqY2DRO0k'
  },
  {
    id: '5',
    image: require('../image/imgVideo5.jpg'),
    text1: 'Word of the day',
    text2: 'Video',
    text3: '21 Nov',
    link:'https://udictionaryblog.wordpress.com/2022/01/27/today-we-are-gonna-learn-the-word-bamboozle/?preview_id&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo'
  },
];

const ItemVideo = ({ item }) => (
  <View style={{ flexDirection: 'column', justifyContent: 'space-around',marginHorizontal:10 }}>
    <View style={{ flex: 2 }}>
      <Pressable onPress={() => Linking.openURL(item.link)}>
        <Image source = {{ uri: item.image }} style={{ width: 155, height: 85 }} />
      </Pressable>
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
function Discover({navigation}) {
    var [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://65607c9d83aba11d99d0eb63.mockapi.io/ww")
            .then((response) => response.json())
            .then((json) => { setData(json) });
    }, []);
const renderSpellingCheckItem = (item) => (
  <Pressable  onPress={() => Linking.openURL(item.link)} style={{  flexDirection: 'row', justifyContent: 'center',marginRight:10 }}>
    <View style={{ width: 72, height: 85, backgroundColor:item.color, flexDirection: 'column', padding: 10 }}>
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
        <Text style={styles.text4}>{item.title}</Text>
      </View>
    </View>
  </Pressable>
);

  return (
  <ScrollView>
  <View style={styles.container}>
    <View style={{flex:1}}>
      <Text style={styles.text1}>Phát hiện</Text>
    </View>
    <View style={{ flex: 3, height: 193}}>
      <Text style={styles.text2}>Trò chơi ô chữ </Text>
      <Pressable onPress={() => Linking.openURL('https://vn.crazygames.com/tr%C3%B2-ch%C6%A1i/wordmeister')} >
        <Image style={styles.img1} source={require('../image/TroChoiOChu.jpg')}/>
      </Pressable>
    </View>
    <View style={{flex:3,height:154,marginTop:45}}>
    <Text style={styles.text2}>Trích dẫn hôm nay</Text>
    <Pressable style={{width: 314,height: 107}}
      onPress={() => {
        navigation.navigate('QuoteToday')
      }}>
      <Image style={styles.img2} source={require('../image/TrichDanHomNay.jpg')}/>
  </Pressable>
</View>

    <View style={{flex:3,height:145,marginTop:10}}>
      <View style={{alignItems:'center'}}>
        <Text style={[styles.text2,{paddingRight:150}]}>Kiểm tra chính tả</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.horizontalScrollView}>
        {data.map((item) => renderSpellingCheckItem(item))}
      </ScrollView> 
    </View>
    <View style={{flex:4}}>
      <Text style={[styles.text2,{marginLeft:12}]}>Góc tiếng anh </Text>
      <FlatList
      data={dataVideo}
      style={{ width: 310 }}
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
  horizontalScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    width:300
  },

});
export default Discover;