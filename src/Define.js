import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable, Animated, FlatList, TextInput} from 'react-native';
import React, { useState } from 'react';
import  { useRef } from 'react';
import { ScrollView } from 'react-native-web';

function Search({navigation, route}) {
    const { textInputValue } = route.params || {}; // Lấy giá trị từ route.params

    const handleSharePress = async () => {
        try {
          const result = await Share.share({
            message: 'Nội dung bạn muốn chia sẻ', // Thông điệp bạn muốn chia sẻ
            url: 'URL hoặc đường dẫn', // URL nếu có
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // Chia sẻ thành công
              console.log(`Chia sẻ thành công qua ${result.activityType}`);
            } else {
              // Chia sẻ thành công
              console.log('Chia sẻ thành công');
            }
          } else if (result.action === Share.dismissedAction) {
            // Đóng chia sẻ
            console.log('Chia sẻ bị hủy');
          }
        } catch (error) {
          console.error('Lỗi khi chia sẻ:', error.message);
        }
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Pressable style={styles.input}>
            <TextInput
                value={textInputValue}
                editable={true}
                style={styles.textInput}
            />
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },  
    input:{
        width: 350,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#2D2D2D',
        
    },
    textInput:{
      fontFamily:'SVN-Gilroy',
      fontSize:17,
      fontWeight:300,
      color:'#909090'
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
export default Search;