import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import React from 'react';

function More({navigation}) {

  return (
  <View style={styles.container}>
    <View style={styles.head}>
      <Text style={styles.text1}>More</Text>
      <Text style={styles.text2}>Nhiều tính năng hơn</Text>
    </View>
    <View style={styles.body} >
      <View style={{flex:1,flexDirection:'row',height:40,width:350,justifyContent:'space-between'}}> 
        <View style={{width:30,marginRight:10}}>
          <Image style = {styles.image} 
          source = {require('../image/setting.png')} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
          <Text style={styles.text3}>Cài đặt</Text>
        </View>
        <Pressable style={{width:40,marginTop:5}}
                    onPress={() => {
              navigation.navigate('Setting')
            }}>
          <Image style={styles.image} source={require('../image/next.png')}/>
        </Pressable>
      </View>
      <View style={{flex:1,flexDirection:'row',height:40,width:350,justifyContent:'space-between'}}> 
        <View style={{width:30,marginRight:10}}>
          <Image style = {styles.image} 
          source = {require('../image/like.png')} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
          <Text style={styles.text3}>Xếp hạng</Text>
        </View>
        <Pressable style={{width:40,marginTop:5}}
                    onPress={() => {
              navigation.navigate('Setting')
            }}>
          <Image style={styles.image} source={require('../image/next.png')}/>
        </Pressable>
      </View>
      <View style={{flex:1,flexDirection:'row',height:40,width:350,justifyContent:'space-between'}}> 
        <View style={{width:30,marginRight:10}}>
          <Image style = {styles.image} 
          source = {require('../image/info_white.png')} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
          <Text style={styles.text3}>Phản hồi</Text>
        </View>
        <Pressable style={{width:40,marginTop:5}}
                    onPress={() => {
              navigation.navigate('Setting')
            }}>
          <Image style={styles.image} source={require('../image/next.png')}/>
        </Pressable>
      </View>
      <View style={{flex:1,flexDirection:'row',height:40,width:350,justifyContent:'space-between'}}> 
        <View style={{width:30,marginRight:10}}>
          <Image style = {styles.image} 
          source = {require('../image/star-icon.png')} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
          <Text style={styles.text3}>Khảo sát sự hài lòng</Text>
        </View>
        <Pressable style={{width:40,marginTop:5}}
                    onPress={() => {
              navigation.navigate('Setting')
            }}>
          <Image style={styles.image} source={require('../image/next.png')}/>
        </Pressable>
      </View>
      <View style={{flex:1,flexDirection:'row',height:40,width:350,justifyContent:'space-between'}}> 
        <View style={{width:30,marginRight:10}}>
          <Image style = {styles.image} 
          source = {require('../image/share.png')} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
          <Text style={styles.text3}>Chia sẻ</Text>
        </View>
        <Pressable style={{width:40,marginTop:5}}
                    onPress={() => {
              navigation.navigate('Setting')
            }}>
          <Image style={styles.image} source={require('../image/next.png')}/>
        </Pressable>
      </View><View style={{flex:1,flexDirection:'row',height:40,width:350,justifyContent:'space-between'}}> 
        <View style={{width:30,marginRight:10}}>
          <Image style = {styles.image} 
          source = {require('../image/book.png')} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',width:280}}>
          <Text style={styles.text3}>Chính sách Bảo mật</Text>
        </View>
        <Pressable style={{width:40,marginTop:5}}
                    onPress={() => {
              navigation.navigate('Setting')
            }}>
          <Image style={styles.image} source={require('../image/next.png')}/>
        </Pressable>
      </View>
    </View>
    <View style={{flex:3}}></View>
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
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