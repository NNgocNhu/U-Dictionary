import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './src/Page1';
import Page2 from './src/Page2';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Page1 />
    // <Page2 />
    // <Page3 />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}