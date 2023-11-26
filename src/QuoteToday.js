import React from 'react';
import { StyleSheet,ScrollView,View, Text,Image,Pressable,Platform  } from 'react-native';
const data = [
  {
    id: '1',
    image: require('../image/img1.png'),
  },
  {
    id: '1',
    image: require('../image/img2.png'),
  },
  {
    id: '1',
    image: require('../image/img3.png'),
  },
  {
    id: '1',
    image: require('../image/img4.png'),
  },
  {
    id: '1',
    image: require('../image/img5.png'),
  },
  {
    id: '1',
    image: require('../image/img6.png'),
  },
  {
    id: '1',
    image: require('../image/img7.png'),
  },
  {
    id: '1',
    image: require('../image/img8.png'),
  },
  {
    id: '1',
    image: require('../image/img9.png'),
  },
  {
    id: '1',
    image: require('../image/img10.png'),
  },

];

function QuoteToday({navigation}) {

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Pressable onPress={() => {
          navigation.navigate('Discover')
          }}
          style={{width: 70,height: 40}}>
          <Image style={styles.img1} source={require('../image/arrows-icon-left.png')}/>
        </Pressable>
          <Text style={styles.text1}>Trích dẫn hôm nay</Text>
      </View>
      {data.map((item) => {
        return ( 
        <View style={styles.body} key = { item.id }>
          <View style={{flex:8,width:309,height:498,justifyContent:'center',paddingLeft:40}}>
            <Image style = {styles.image} 
          source = {{ uri: item.image }}/>
          </View>
          <View style={{ flex: 2,flexDirection:'row',justifyContent:'space-around',marginHorizontal:33,marginTop:45}}>
          <Pressable >
            <Image source={require('../image/images-removebg-preview.png')} style={{ width: 34, height: 36, resizeMode: 'contain', }} /></Pressable>
            <Text style={styles.text2}>Tải xuống</Text>
            <Image source={require('../image/transparent-background-.png')} style={{width:41,height:41}}/>
            <Text style={styles.text3}>Chia sẻ</Text>
          </View> 
        </View>
        )
        }) 
      } 
    </View>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    flex:2,
    height:'100%',
    width:'100%',
    flexDirection:'row',
    marginVertical:10
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
export default QuoteToday;
