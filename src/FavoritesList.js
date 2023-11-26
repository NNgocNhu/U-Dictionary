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

      // Update the local state if needed
      setFavorites([]);
    } catch (error) {
      console.error('Error clearing favorites:', error);
      Alert.alert('Error', 'An error occurred while clearing the favorite terms.');
    }
  };
  const handleDeleteFavorite = async (termId) => {
    try {
      // Remove the term from favorites based on its id
      const updatedFavorites = favoriteTerms.filter((term) => term.id !== termId);

      // Save the updated favorites to AsyncStorage
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      // Update the state to re-render the component
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
  
  return (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={{flex:2,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.text1}>Favorite</Text>
        <Image style={{height:70,width:70,resizeMode:'contain'}} source={require('../image/folderStar.png')}/>
    </View>
    <View style={{flex:10,flexDirection:'column',}}>
      {favoriteTerms.map((favorite, index) => (
    <View style={{flex:2,flexDirection:'column',alignItems:'center',height:150,width:330 }}>
        <View style={{height:150,width:330, flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{width:55,height:55,}}>
              <Image style={{height:29,width:29,}} source={require('../image/Star.png')}/>
          </View>
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
          <TouchableOpacity style={{paddingTop:15}} onPress={() => handleDeleteFavorite(favorite.id)}>
              <Text style={styles.text2}>Remove</Text>
          </TouchableOpacity>
          
         
          
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(152, 145, 145, 0.8)',width:330,marginTop:15}} />
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
