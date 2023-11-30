import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';
import Home from './src/Home';
import More from './src/More';
import Discover from './src/Discover';
import Favorite from './src/Favorite';
import Define from './src/Define';
import QuoteToday from './src/QuoteToday';
import FavoritesList from './src/FavoritesList';
import Fail_Screen from './src/Fail';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const handleSharePress = async () => {
  try {
    const result = await Share.share({
      message: 'Nội dung bạn muốn chia sẻ', // Thông điệp bạn muốn chia sẻ
      url: 'URL hoặc đường dẫn', // URL nếu có
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // Chia sẻ thành công
        console.log(`Chia sẻ thành công qua ${result.activityType}`);
      } else {
        // Chia sẻ thành công
        console.log('Chia sẻ thành công');
      }
    } else if (result.action === Share.dismissedAction) {
      // Đóng chia sẻ
      console.log('Chia sẻ bị hủy');
    }
  } catch (error) {
    console.error('Lỗi khi chia sẻ:', error.message);
  }
};
const HomeStack = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    
      <Stack.Screen
        name="Define"
        component={Define}
        options={({ navigation }) => ({
          title: 'Định nghĩa',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'SVN-Gilroy',
            fontSize: 20,
            fontWeight: '300',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('./image/back.png')} style={{ width: 20, height: 20, marginLeft: 10}} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={handleSharePress}>
              <Image source={require('./image/share.png')} style={{ width: 25, height: 25, marginRight: 10}} />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="Fail"
        component={Fail_Screen}
        options={({ navigation }) => ({
          title: '404',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'SVN-Gilroy',
            fontSize: 20,
            fontWeight: '300',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('./image/back.png')} style={{ width: 20, height: 20, marginLeft: 10}} />
            </TouchableOpacity>
          )
        })}
      />
      
    </Stack.Navigator>
  );
};

const DiscoverStack = () => {
  return(
    <Stack.Navigator>
     <Stack.Screen
    name="Discover"
    component={Discover}
    options={{ headerShown: false }}
    />
    <Stack.Screen
    name="QuoteToday"
    component={QuoteToday}
    options={{ headerShown: false }}
    />
  </Stack.Navigator>
  );
};

const FavoriteStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="FavoritesList"
      component={FavoritesList}
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name="Favorite"
      component={Favorite}
      options={{ headerShown: false }}
      />  
  </Stack.Navigator>
  );
};
const MoreStack = () => {
   
  return(
    <Stack.Navigator>
     
    <Stack.Screen
    name="More"
    component={More}
    options={{ headerShown: false }}
    />
    
    <Stack.Screen
    name="Setting"
    component={Setting}
    options={{ headerShown: false }}
    />

      <Stack.Screen
        name="Fail"
        component={Fail_Screen}
        options={({ navigation }) => ({
          title: '404',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'SVN-Gilroy',
            fontSize: 20,
            fontWeight: '300',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('./image/back.png')} style={{ width: 20, height: 20, marginLeft: 10}} />
            </TouchableOpacity>
          )
        })}
      />
  </Stack.Navigator>
  );
};


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
        <Tab.Screen name='Home' component={HomeStack} options={{
          headerShown: false, 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/home-icon.png')}
              style={{ width: '20px', height: '20px'}}
            />
          ),
        }}/> 
        <Tab.Screen name ='Discover' component={DiscoverStack} options={{
          headerShown: false, 
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/compass-icon.png')}
              style={{ width: '20px', height: '20px'}}
            />
          )}}/>
        <Tab.Screen name='FavoritesList' component={FavoriteStack} options={{
          headerShown: false, 
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./image/1star.png')}
              style={{ width: '20px', height: '20px'}}
            />
          )}}/>
        <Tab.Screen name='More' component={MoreStack} options={{
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