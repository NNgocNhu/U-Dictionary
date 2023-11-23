import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import More from './src/More';
import PhatHien from './src/PhatHien';
import Favorite from './src/Favorite';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'black', // Màu nền của thanh tab
          },
          tabBarActiveTintColor: 'white', // Màu của chữ khi tab được chọn
          tabBarInactiveTintColor: 'gray', // Màu của chữ khi tab không được chọn
        }}>
        <Tab.Screen name='Home' component={Home} options={{
          headerShown: false, 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/home-icon.png')}
              style={{ width: '20px', height: '20px'}}
            />
          ),
        }}/>
        <Tab.Screen name ='Discover' component={PhatHien} options={{
          headerShown: false, 
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/compass-icon.png')}
              style={{ width: '20px', height: '20px'}}
            />
          )}}/>
        <Tab.Screen name='Favorite' component={Favorite} options={{
          headerShown: false, 
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/1star.png')}
              style={{ width: '20px', height: '20px'}}
            />
          )}}/>
        <Tab.Screen name='More' component={More} options={{
          headerShown: false, 
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/menu.png')}
              style={{ width: '20px', height: '20px'}}
            />
          )}}/>

      </Tab.Navigator>
    </NavigationContainer>

  );
}