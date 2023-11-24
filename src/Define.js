import { StyleSheet, Text, View, Image, Pressable, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-web';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Concise = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Nội dung cho Tab 1 */}
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

const initialLayout = { width: Dimensions.get('window').width };

function Define({navigation, route}) {
    const { textInputValue } = route.params || {}; // Lấy giá trị từ route.params

    const [index, setIndex] = React.useState(0);

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

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
    textInput:{
      fontFamily:'SVN-Gilroy',
      fontSize:17,
      fontWeight:300,
      color:'#909090',
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