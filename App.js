import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import More from './src/More';
import PhatHien from './src/PhatHien';
import Favorite from './src/Favorite';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator options={{headerShown: false}}>
        <Tab.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Tab.Screen name ='PhatHien' component={PhatHien} options={{headerShown: false}}/>
        <Tab.Screen name='Favorite' component={Favorite} options={{headerShown: false}}/>
        <Tab.Screen name='More' component={More} options={{headerShown: false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}