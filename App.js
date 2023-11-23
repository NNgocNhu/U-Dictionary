import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhatHien from './src/PhatHien';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{headerShown: false}}>
        <Stack.Screen name='PhatHien' component={PhatHien} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}