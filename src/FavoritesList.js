import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image ,ScrollView, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FavoritesList({navigation}) {
  const [favoriteTerms, setFavoriteTerms] = useState([]);
  
  const handleClearAllFavorites = async () => {
    try {
      // Xóa toàn bộ danh sách từ vựng yêu thích
      await AsyncStorage.removeItem('favorites');
      Alert.alert('Success', 'All favorite terms cleared successfully.');

      setFavorites([]);
    } catch (error) {
      console.error('Error clearing favorites:', error);
      Alert.alert('Error', 'An error occurred while clearing the favorite terms.');
    }
  };
  const handleDeleteFavorite = async (termId) => {
    try {
      const updatedFavorites = favoriteTerms.filter((term) => term.id !== termId);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      setFavoriteTerms(updatedFavorites);

      Alert.alert('Success', 'Term removed from favorites successfully.');
    } catch (error) {
      console.error('Error deleting favorite term:', error);
      Alert.alert('Error', 'An error occurred while removing the term from favorites.');
    }
  };
  useEffect(() => {
    const fetchFavoriteTerms = async () => {
      try {
        const favorites = await AsyncStorage.getItem('favorites');
        console.log('Favorites from AsyncStorage:', favorites);
        const parsedFavorites = JSON.parse(favorites) || [];
        setFavoriteTerms(parsedFavorites);
        if (parsedFavorites.length === 0) {
          navigation.navigate('Favorite');
        }
      } catch (error) {
        console.error('Error fetching favorite terms:', error);
      }
    };

    fetchFavoriteTerms();
  }, [navigation]);
  const [imageSource, setImageSource] = useState(require('../image/star0.png'));
  const handleImagePress = (pressedFavorite) => {
    setFavoriteTerms((prevFavorites) => {
      const updatedFavorites = prevFavorites.map((favorite) => {
        if (favorite.id === pressedFavorite.id) {
          // Toggle the favorite status
          handleDeleteFavorite(pressedFavorite.id);
          return { ...pressedFavorite, isFavorite: !pressedFavorite.isFavorite };
        }
        return favorite;
      });

      return updatedFavorites;
    });
  };
  return (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={{flex:2,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.text1}>Favorite</Text>
        <Image style={{height:70,width:70,resizeMode:'contain'}} source={require('../image/folderStar.png')}/>
    </View>
    <View style={{flex:8,flexDirection:'column',}}>
      {favoriteTerms.map((favorite, index) => (
    <View style={{flex:2,flexDirection:'column',alignItems:'center',height:150,width:330 }}>
        <View style={{height:70,width:330, flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#ccc'}}>
        
          <Pressable
            key={index}
            style={{
              height:110,
              paddingBottom:5
            }}
            // onPress={() => console.log('Navigate to details of:', favorite.term)}
          >
            <Text style={styles.text1}>{favorite.term}</Text>
            
          </Pressable>
          <TouchableOpacity onPress={() => handleImagePress(favorite)}>
                <Image
                  source={favorite.isFavorite ? require('../image/star_orange.png') : require('../image/star0.png')}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
          
        </View>
      </View>
        
      ))}
      </View>
      <TouchableOpacity onPress={handleClearAllFavorites}>
              <Text style={styles.text2}>RemoveAll</Text>
          </TouchableOpacity>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#0d0d0d',
      padding:5,
      paddingLeft:20
    }, 
    text1:{
      fontFamily:'SVN-Gilroy',
      fontSize:29,
      fontWeight:700,
      color:'#fff',
      
      
    },
    text2:{
      color:'rgba(252, 249, 249, 0.80)',
      fontFamily:'SVN-Gilroy',
      fontSize:15,
      fontWeight:700,
      
    },
  })
export default FavoritesList;
