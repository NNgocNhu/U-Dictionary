import data from "../data.json";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialLayout = { width: Dimensions.get("window").width };

function Define({ navigation, route }) {
  const { textInputValue } = route.params || {};

  const wordInfo = data.find((word) => word.word === textInputValue);

  console.log(wordInfo);
  const handleFavoritePress = async () => {
    try {
      // Lấy danh sách từ vựng đã yêu thích từ AsyncStorage
      const favorites = await AsyncStorage.getItem('favorites');
      let parsedFavorites = JSON.parse(favorites) || [];
  
      // Kiểm tra xem từ vựng đã tồn tại trong danh sách yêu thích chưa
      const termExists = parsedFavorites.some((favorite) => favorite.term === textInputValue);
  
      if (!termExists) {
        // Thêm từ vựng hiện tại vào danh sách yêu thích
        parsedFavorites.push({ id: Date.now(), term: textInputValue });
  
        // Lưu lại danh sách yêu thích mới vào AsyncStorage
        await AsyncStorage.setItem('favorites', JSON.stringify(parsedFavorites));
        console.log('Vocabulary added to favorites:', textInputValue);
      } else {
        console.log('Vocabulary already exists in favorites:', textInputValue);
      }
    } catch (error) {
      console.error("Error handling favorite:", error);
    }
  };
  const handleViewFavoritesPress = () => {
    console.log('Navigating to FavoritesList');
    navigation.navigate('FavoritesList');
  };
  
  const Concise = () => (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 10,
      }}
    >
      {Array.isArray(wordInfo) &&
        wordInfo.map((item) => (
          <View key={item.id} style={styles.def}>
            {item.concise.map((conciseItem, index) => (
              <View style={styles.defWord} key={index}>
                <Text style={styles.defWordstyle}>{conciseItem.type}</Text>
                <Text style={styles.defWordstyle}>
                  {conciseItem.definition}
                </Text>
              </View>
            ))}
          </View>
        ))}
    </ScrollView>
  );

  const Collin = () => (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {Array.isArray(wordInfo) &&
        wordInfo.map((item) => (
          <View key={item.id} style={styles.def}>
            {item.collin.map((collinItem, index) => (
              <View style={styles.defWord} key={index}>
                <Text style={styles.defWordstyle}>{collinItem.type}</Text>
                <Text style={styles.defWordstyle}>{collinItem.definition}</Text>
              </View>
            ))}
          </View>
        ))}
    </ScrollView>
  );

  const Wordnet = () => (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {Array.isArray(wordInfo) &&
        wordInfo.map((item) => (
          <View key={item.id} style={styles.def}>
            {item.wordnet.map((wordnetItem, index) => (
              <View style={styles.defWord} key={index}>
                <Text style={styles.defWordstyle}>{wordnetItem.type}</Text>
                <Text style={styles.defWordstyle}>
                  {wordnetItem.definition.join(", ")}
                </Text>
              </View>
            ))}
          </View>
        ))}
    </ScrollView>
  );

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Concise" },
    { key: "second", title: "Collin" },
    { key: "third", title: "Wordnet" },
  ]);

  const renderScene = SceneMap({
    first: Concise,
    second: Collin,
    third: Wordnet,
  });

  const [imageSource, setImageSource] = useState(require('../image/star0.png'));

  const handleImagePress = () => {
    if (imageSource === require('../image/star0.png')) {
      // cập nhật thành star_orange.png và gọi hàm handleFavoritePress
      setImageSource(require('../image/star_orange.png'));
      handleFavoritePress();
    } else {
      setImageSource(require('../image/star0.png'));
    }  
  };

  React.useEffect(() => {
    console.log('Index has changed:', index);
  }, [index]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Pressable style={styles.input}>
            <View style={styles.inputContainer}>
              <TextInput
                value={wordInfo.word}
                editable={true}
                style={styles.textInput}
              />
              <Image
                style={styles.cancel}
                source={require('../image/cancel.png')}
              />
            </View>
          </Pressable>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:10 }}>
            <Text style={styles.word}>{wordInfo.word}</Text>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                source={imageSource}
                style={{ width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Image
              source={require('../image/loudspeaker.png')}
              style={{ width: 25, height: 25}}
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
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  input: {
    width: 370,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2D2D2D",
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  word: {
    width: 330,
    height: 43,
    fontFamily: "SVN-Gilroy",
    fontSize: 35,
    fontWeight: 700,
    color: "#C8C8C8",
    marginLeft: 5,
    marginBottom: 5,
  },
  textInput: {
    fontFamily: "SVN-Gilroy",
    fontSize: 17,
    fontWeight: 300,
    color: "#909090",
    marginLeft: 5,
    outlineColor: 'transparent',
    outlineStyle: 'none'
  },
  pronun: {
    fontFamily: "SVN-Gilroy",
    fontSize: 15,
    fontWeight: 300,
    color: "#5F5F5F",
    marginLeft: 5,
  },
  cancel: {
    width: 17,
    height: 17,
  },
  text1: {
    width: 180,
    height: 45,
    fontFamily: "SVN-Gilroy",
    fontSize: 30,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 20,
  },
  text2: {
    width: 180,
    height: 45,
    fontFamily: "SVN-Gilroy",
    fontSize: 17,
    fontWeight: 300,
    color: "#9B9B9B",
    textAlign: "center",
    marginBottom: 20,
  },
  translate: {
    width: 370,
    height: 150,
    borderWidth: 2,
    borderColor: "#81BEE0",
    borderRadius: 20,
  },
  def: {
    width: "80%",
    height: 105,
    flexDirection: "column",
  },
  defWord: {
    flexDirection: "row",
  },
  defWordstyle: {
    fontFamily: "SVN-Gilroy",
    fontSize: 17,
    fontWeight: 300,
    color: "#fff",
    textAlign: "left",
    marginBottom: 10,
    marginRight: 10,
  },
});
export default Define;
