import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Pressable } from 'react-native';


function Page1({ route, navigation }) {
  var [image, setImage] = useState();
  useEffect(() => {
    if (route.params.image) {
      setImage(route.params.image)
    }
  }, [route.params.image])
  return (
    <View style={styles.container} >
      <View style={{ flex: 8 }}>
        <Image style={styles.image}
          source={route.params?.img || require('../assets/vs_blue.png')} />

      </View>
      <View style={{ flex: 5, marginLeft: 20 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.text} > Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text>
        </View>
        <View style={[styles.star, { flex: 1 }]} >
          <Image style={{ width: '23px', height: '25px', marginRight: 5 }}
            source={require('../assets/star.png')} />
          <Image style={{ width: '23px', height: '25px', marginRight: 5 }}
            source={require('../assets/star.png')} />
          <Image style={{ width: '23px', height: '25px', marginRight: 5 }}
            source={require('../assets/star.png')} />
          <Image style={{ width: '23px', height: '25px', marginRight: 5 }}
            source={require('../assets/star.png')} />
          <Image style={{ width: '23px', height: '25px', marginRight: 5 }}
            source={require('../assets/star.png')}
          />
          <Text style={[styles.text, { marginTop: 6, marginLeft: 10 }]} > (Xem 828 đánh giá) </Text>
        </View>
        <View style={[styles.star, { flex: 1 }, { justifyContent: 'space-between' }]} >
          <Text style={
            [styles.text1]} > 1.790 .000 đ </Text>
          <Text style={[styles.text2,]} > 1.790 .000 đ </Text>
        </View>
        <View style={[styles.star, { flex: 1 }]} >
          <Text style={[{ color: '#FA0000', fontFamily: 'Roboto', fontSize: '12px', fontStyle: 'normal', fontWeight: 700, marginTop: 10 }]} >
            Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text> <Image style={{ width: '20px', height: '20px', margin: 5 }}
              source={require('../assets/Group1.png')} />
        </View>
        <View style={[{ flex: 1 }]} >
          <Pressable onPress={() => {
            navigation.navigate('Page2')
          }} style={[{
            borderWidth: 1,
            borderColor: '#00000075',
            borderRadius: '10px',
            height: '34px',
            width: '332px',
            flexDirection: 'row', justifyContent: 'space-between',
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15
          }]}>
            <Text style={
              [{ color: '#000', fontFamily: 'Roboto', fontSize: '12px', fontWeight: 700, padding: 10, }]} >
              4 MÀU - CHỌN MÀU   </Text>
            <Image style={{ width: '20px', height: '20px', margin: 5, justifyContent: 'flex-end' }}
              source={require('../assets/Vector.png')} />
          </Pressable>
        </View>
        <View style={{ flex: 1 }}>

        </View>
        <View style={[{ flex: 1, marginBottom: 10, }]}>
          <Pressable style={[styles.Button1, {
            width: 330, shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15
          }]}>
            <Text style={styles.ButtonText} > CHỌN MUA </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '301px',
    height: '361px',
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,

  },
  star: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  text1: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: '#000',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: '#00000094',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  Button1: {
    backgroundColor: '#ee0909',
    borderWidth: 1,
    borderColor: "#c91535",
    borderRadius: 10,
    height: 44,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: '20px',
    color: 'rgba(249, 242, 242, 1)',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700'
  },
});
export default Page1;