import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Animated, FlatList} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';

function Home({navigation}) {
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.text1}>U-Dictionary</Text>
    </View>
    <Pressable style={styles.translate}>
        <Pressable>
            <Pressable style={{flex:1, flexDirection:'row', alignContent: 'center'}}>
                <Text style={styles.input}>Nhập ký tự</Text>
                <Image
                    source={require('../image/audio.png')}
                    style={{ width: 17, height: 17}}
                />
            </Pressable>
        </Pressable>
    </Pressable>
    <View style={{flex:1, flexDirection:'row', alignContent: 'center'}}>
        <Pressable style={{flex:1, flexDirection:'row'}}>
            <Pressable style={styles.uDiction}>
                <Image
                    source={require('../image/letter-u.png')}
                    style={{ width: 60, height: 60, marginTop: 30, marginLeft: 50}}
                />
                <Text style={{ 
                        width: 50, 
                        height: 16, 
                        marginLeft: 55, 
                        textAlign:'center',
                        fontFamily: 'SVN-Gilroy',
                        fontSize:13,
                        fontWeight:700,
                        color: 'white'
                    }}>Màu</Text>
            </Pressable>
            <Pressable style={{flex:1,flexDirection:'column'}}>  
                <Pressable style={styles.subUDiction}>
                    <Image
                        source={require('../image/camera.png')}
                        style={{ width: 25, height: 25, marginTop: 10, marginLeft: 5}}
                    />
                    <Text style={{ 
                            width: 100, 
                            height: 16, 
                            marginTop: 10,
                            marginLeft: 10, 
                            textAlign:'left',
                            fontFamily: 'SVN-Gilroy',
                            fontSize:13,
                            fontWeight:700,
                            color: 'white'
                        }}>Camera</Text>
                </Pressable>
                <Pressable style={styles.subUDiction}>
                    <Image
                        source={require('../image/translator.png')}
                        style={{ width: 25, height: 25, marginTop: 10, marginLeft: 5}}
                    />
                    <Text style={{ 
                            width: 100, 
                            height: 16, 
                            marginTop: 10,
                            marginLeft: 10, 
                            textAlign:'left',
                            fontFamily: 'SVN-Gilroy',
                            fontSize:13,
                            fontWeight:700,
                            color: 'white'
                        }}>Đoạn thoại</Text>
                </Pressable>
                <Pressable style={styles.subUDiction}>
                    <Image
                        source={require('../image/notes.png')}
                        style={{ width: 25, height: 25, marginTop: 10, marginLeft: 5}}
                    />
                    <Text style={{ 
                            width: 100, 
                            height: 16, 
                            marginTop: 10,
                            marginLeft: 10, 
                            textAlign:'left',
                            fontFamily: 'SVN-Gilroy',
                            fontSize:13,
                            fontWeight:700,
                            color: 'white'
                        }}>Ngữ pháp</Text>
                </Pressable>
            </Pressable>
        </Pressable>
    </View>
    <View style={styles.options}>

    </View>
  </View>
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
    width:'180px',
    height: '45px',
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    color:'#fff',
    textAlign: 'left',
    marginBottom: '20px'
  },
  translate:{
    width: '370px',
    height: '150px',
    borderWidth: '2px',
    borderColor: '#81BEE0',
    borderRadius: '20px',
    marginBottom: 30,
    backgroundColor: '#2D2D2D',
  },
  input:{
    width:'260px',
    height: '55px',
    color: '#13597E',
    fontFamily: 'SVN-Gilroy',
    fontSize:30,
    fontWeight:300,
    textAlign: 'left',
    marginTop: '60px',
    marginLeft: '16px'
  },
  uDiction:{
    width: 170,
    height: 170,
    borderRadius: 10,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    marginRight: 10,
    flexDirection: 'column'
  },
  subUDiction:{
    width: 170,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row'
  },
});
export default Home;