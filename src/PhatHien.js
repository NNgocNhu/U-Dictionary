import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable,ScrollView ,Animated , FlatList} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';
const COLORS = {
  January: '#FF5733',
  February: '#33FF57',
  March: '#5733FF',
  April: '#FF3366',
  May: '#33FFCC',
  June: '#FFD700',
  July: '#7CFC00',
  August: '#8A2BE2',
  September: '#FF1493',
  October: '#4169E1',
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
    image: require('../image/image 1.png'),
    text1: 'Word: Achievement',
    text2: 'Video',
    text3: '17 Nov',
  },
  {
    id: '2',
    image: require('../image/image 2.png'),
    text1: 'Word: Affable',
    text2: 'Video',
    text3: '16 Nov',
  },
];
const IMAGES = [
  require('../image/TroChoiOChu.jpg'),
  require('../image/TroChoiOChu.jpg'),
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

const ItemT = ({ uri, opacity }) => (
  <View>
    <Image style={styles.img1} source={uri} />
    <Animated.View style={[styles.overlay, { opacity }]} />
  </View>
);
const ItemVideo = ({ item }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 10 }}>
    <View style={{ flex: 2 }}>
      <Image source={item.image} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Text>{item.text1}</Text>
      <Text>{item.text2}</Text>
      <Text>{item.text3}</Text>
    </View>
  </View>
);
function PhatHien({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const getItemLayout = (_, index) => ({
  //   length: 304,
  //   offset: 304 * index,
  //   index,
  // });
  const handleOpacityPress = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? 1 : 0);
  };
  return (
  <ScrollView>
  <View style={styles.container}>
    <View style={{flex:1,flexDirection:'row'}}>
      <Text style={styles.text1}>Phát hiện</Text>
    </View>
    <View style={{ flex: 2, marginTop: 25, height: 193, marginHorizontal: 27 }}>
          <Text style={[styles.text2, { marginLeft: 10 }]}>Trò chơi ô chữ </Text>
          <FlatList
            data={IMAGES}
            renderItem={({ item }) => (
              <ItemT uri={item} opacity={currentImageIndex === 0 ? 1 : 0} />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            // getItemLayout={getItemLayout}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {/* Nút opacity cho hình ảnh thứ nhất */}
            <TouchableOpacity
              style={{ height: 10, width: 10, borderRadius: 6, marginHorizontal: 10, backgroundColor: '#fff' }}
              onPress={handleOpacityPress}
            ></TouchableOpacity>
            {/* Nút opacity cho hình ảnh thứ hai */}
            <TouchableOpacity
              style={{ height: 10, width: 10, borderRadius: 6, backgroundColor: '#fff' }}
              onPress={handleOpacityPress}
            ></TouchableOpacity>
          </View>
        </View>
    <View style={{flex:2,marginTop:25,height:154}}>
      <Text style={styles.text2}>Trích dẫn hôm nay</Text>
      <Image style={styles.img2} source={require('../image/TrichDanHomNay.jpg')}/>
    </View>
    <View style={{flex:2,marginTop:10,height:145}}>
      <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:35}}>
          <Text style={styles.text2}>Kiểm tra chính tả</Text>
      </View>
      <FlatList
        style={{marginLeft:35}}
        horizontal
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} backgroundColor={item.color} />}
        keyExtractor={(item) => item.id}
      />
    </View>
    <View style={{flex:2,height:180}}>
      <Text style={styles.text2}>Góc tiếng anh </Text>
      <FlatList
      data={dataVideo}
      renderItem={({ item }) => <ItemVideo item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
     />
    </View>
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{ flex: 2 }}>
        <Image source={require('../image/image 1.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
      <View style={{ flex: 1 }}>
      </View>
  </View>
      <View style={{flex:1,backgroundColor:'#fff'}}>

      </View>
      <View style={{flex:1,backgroundColor:'#fff'}}>

      </View>
      <View style={{flex:1,backgroundColor:'#fff'}}>

      </View>
      <View style={{flex:1,backgroundColor:'#fff'}}>

      </View>
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
    marginBottom:10
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
  img1:{
    width: 304,
    height: 139,
    marginLeft:10
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