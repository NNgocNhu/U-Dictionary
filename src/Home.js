import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import data from '../data.json';

function Home({navigation}) {
    
    const [textInputValue, setTextInputValue] = useState('');
    
    const handleTextChange = (textInputValue) => {
      // Kiểm tra từ nhập có trong dữ liệu từ file JSON không
      const foundWordInfo = data.find((word) => word.word.toLocaleLowerCase() === textInputValue.toLocaleLowerCase());
    
      if (foundWordInfo) {
        navigation.navigate('Define', { textInputValue });
        setTextInputValue('');
      } else {
        console.log('Từ không tồn tại trong dữ liệu!');
        setTextInputValue(textInputValue);
      }
    };
    
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.text1}>U-Dictionary</Text>
    </View>
    <Pressable style={styles.translate} onPress={handleTextChange}>
        <Pressable >
            <Pressable style={{flex:1, flexDirection:'row', alignContent: 'center'}}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nhập ký tự"
                    editable
                    value={textInputValue}
                    multiline={true}
                    onChangeText={setTextInputValue}
                    maxLength={100}/>
                <TouchableOpacity onPress={() => handleTextChange(textInputValue)}>
                  <Image
                    source={require('../image/search.png')}
                    style={{ width: 25, height: 25, marginHorizontal: 'auto', marginVertical: 'auto'}}
                  />
                </TouchableOpacity>
            </Pressable>
        </Pressable>
    </Pressable>
    <View style={{flex:1, flexDirection:'row', alignContent: 'space-between'}}>
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
    width:180,
    height: 45,
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:700,
    color:'#fff',
    textAlign: 'left',
    marginBottom: 20
  },
  translate:{
    width: 370,
    height: 150,
    borderWidth: 2,
    borderColor: '#81BEE0',
    borderRadius: 20,
    marginBottom: 10
  },
  input:{
    width: 300,
    height: 110,
    fontFamily:'SVN-Gilroy',
    fontSize:30,
    fontWeight:300,
    color:'#13597E',
    textAlign: 'left',
    padding: 10,
    outlineColor: 'transparent',
    outlineStyle: 'none'
  },
  uDiction:{
    width: 170,
    height: 170,
    borderWidth: 2,
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    marginRight: 10
  },
  subUDiction:{
    width: 170,
    height: 50,
    borderWidth: 2,
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row'

  }
});
export default Home;