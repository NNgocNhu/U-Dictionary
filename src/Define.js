import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import React, { useState ,useEffect} from 'react';
import { ScrollView } from 'react-native';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialLayout = { width: Dimensions.get('window').width };

function Define({navigation, route}) {
  const [textInputValueF, setTextInputValue] = useState('');

  const handleFavoritePress = async () => {
    try {
       // Lấy danh sách từ vựng đã yêu thích từ AsyncStorage
       const favorites = await AsyncStorage.getItem('favorites');
       let parsedFavorites = JSON.parse(favorites) || [];
 
       // Thêm từ vựng hiện tại vào danh sách yêu thích
       parsedFavorites.push({ id: Date.now(), term: textInputValue });
       
       // Lưu lại danh sách yêu thích mới vào AsyncStorage
       await AsyncStorage.setItem('favorites', JSON.stringify(parsedFavorites));
      console.log('Vocabulary added to favorites:', textInputValue);
    } catch (error) {
      console.error('Error handling favorite:', error);
    }
  };
  const handleViewFavoritesPress = () => {
    console.log('Navigating to FavoritesList');
    navigation.navigate('FavoritesList');
  };
    const { textInputValue } = route.params || {};

    const [index, setIndex] = React.useState(0);

    const Concise = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
);
  
const Collin = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Nội dung cho Tab 2 */}
    </View>
);
  
const Wordnet = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Nội dung cho Tab 3 */}
    </View>
);

    const [routes] = React.useState([
        { key: 'first', title: 'Concise' },
        { key: 'second', title: 'Collin' },
        { key: 'third', title: 'Wordnet' },
    ]);
=======
import React, { useState } from 'react';
import { ScrollView } from 'react-native-web';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import data from '../data.json';

const initialLayout = { width: Dimensions.get('window').width };

function Define({navigation, route}) {
  const { textInputValue } = route.params || {};

  const [index, setIndex] = React.useState(0);

  const wordInfo = data.find((word) => word.english === textInputValue);
>>>>>>> 01fbb196995a9c5341b1b507034b8a6d709b99da

  const Concise = () => (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <View>

      </View>
    </ScrollView>
  );
  
  const Collin = () => (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Nội dung cho Tab 2 */}
      </ScrollView>
  );
  
  const Wordnet = () => (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Nội dung cho Tab 3 */}
      </ScrollView>
  );

  const [routes] = React.useState([
    { key: 'first', title: 'Concise' },
    { key: 'second', title: 'Collin' },
    { key: 'third', title: 'Wordnet' },
  ]);

  const renderScene = SceneMap({
    first: Concise,
    second: Collin,
    third: Wordnet,
  });

  const [imageSource, setImageSource] = useState(require('../image/star0.png'));

  const handleImagePress = () => {
    setImageSource(require('../image/star_orange.png'));
  };

    return (
        <ScrollView contentContainerStyle={styles.container}>
<<<<<<< HEAD
            <Pressable style={styles.input}>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={textInputValue}
                        editable={true}
                        style={styles.textInput}
                    />
                    <Image
                        style={styles.cancel}
                        source={require('../image/cancel.png')}
                    />
                </View>
            </Pressable>
            <View style = {{flex: 1, flexDirection: 'row', alignContent: 'space-around'}}>
              <Text style={styles.word}>{textInputValue}</Text>
              <TouchableOpacity onPress={handleFavoritePress}>
                <Image
                  source={require('../image/star0.png')}
                  style={{ width: 18, height: 18, marginHorizontal: 'auto', marginVertical: 'auto'}}
                />
              </TouchableOpacity>
              
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={(props) => (
                    <TabBar
                        {...props}
                        indicatorStyle={{ backgroundColor: '#C2392F' }}
                        style={{ backgroundColor: 'black' }}
                        activeColor={'white'}
                        inactiveColor={'black'}
                    />
                )}
=======
          <Pressable style={styles.input}>
            <View style={styles.inputContainer}>
              <TextInput
                value={wordInfo.english}
                editable={true}
                style={styles.textInput}
              />
              <Image
                style={styles.cancel}
                source={require('../image/cancel.png')}
              />
            </View>
          </Pressable>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.word}>{wordInfo.english}</Text>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                source={imageSource}
                style={{ width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image
              source={require('../image/loudspeaker.png')}
              style={{ width: 25, height: 25}}
>>>>>>> 01fbb196995a9c5341b1b507034b8a6d709b99da
            />
            <Text style={styles.pronun}>UK {wordInfo.pronunciation.UK}</Text>
            <Image
              source={require('../image/loudspeaker.png')}
              style={{ width: 25, height: 25, marginLeft: 10}}
            />
            <Text style={styles.pronun}>US {wordInfo.pronunciation.US}</Text>
          </View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#C2392F' }}
                style={{ backgroundColor: 'black' }}
                activeColor={'white'}
                inactiveColor={'#909090'}
              />
            )}
          />
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
        width: 370,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#2D2D2D',
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        padding: 10
    },
    word:{
<<<<<<< HEAD
=======
      width: 330,
      height: 43,
>>>>>>> 01fbb196995a9c5341b1b507034b8a6d709b99da
      fontFamily:'SVN-Gilroy',
      fontSize:35,
      fontWeight:700,
      color:'#C8C8C8',
<<<<<<< HEAD
      marginLeft: 5
=======
      marginLeft: 5,
      marginBottom: 5
>>>>>>> 01fbb196995a9c5341b1b507034b8a6d709b99da
    },
    textInput:{
      fontFamily:'SVN-Gilroy',
      fontSize:17,
      fontWeight:300,
      color:'#909090',
      marginLeft: 5
    },
    pronun:{
      fontFamily:'SVN-Gilroy',
      fontSize:15,
      fontWeight:300,
      color:'#5F5F5F',
      marginLeft: 5
    },
    cancel:{
      width: 17,
      height: 17,
      
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
export default Define;