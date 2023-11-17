import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Pressable } from 'react-native';


function Page2({ route, navigation }) {
  var [image, setImage] = useState(require('../assets/vs_blue.png'));
  var [text, setText] = useState('Xanh')
  return (
    <View style={styles.container} >
      <View style={{ flex: 1, backgroundColor: '#fff', }}>
        <View style={{ width: '360px', flexDirection: 'row', }}>
          <Image source={image}
            style={[{
              marginTop: 5,
              height: '135px',
              width: '112px',
            }]}
          />
          <View>
            <Text style={[styles.text]} > Điện Thoại Vsmart Joy 3 <br /> Hàng chính hãng</Text>
            <Text style={[styles.textB]} > Màu: {text} </Text>
            <Text style={[styles.text]} >Cung cấp bởi Tiki Tradding </Text>
            <Text style={[styles.text, { fontWeight: 700 }]} >1.790.000 đ</Text>
          </View>
        </View>

      </View>
      <View style={{ flex: 3, backgroundColor: '#rgba(196, 196, 196, 1)', }}>
        <Text style={[styles.text, { marginTop: 20, fontSize: 18 }]} > Chọn một màu bên dưới: </Text>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <Pressable onPress={() => {
            setImage(require('../assets/vs_silver.png')),
              setText('Trắng')
          }} style={[styles.rectangle, { backgroundColor: 'rgba(197, 241, 251, 1)', margin: 1 }]}></Pressable>
          <Pressable onPress={() => {
            setImage(require('../assets/vs_red.png')),
              setText('Đỏ')
          }} style={[styles.rectangle, { backgroundColor: '#f30d0d' }]}></Pressable>
          <Pressable onPress={() => {
            setImage(require('../assets/vs_black.png')),
              setText('Đen')
          }} style={[styles.rectangle, { backgroundColor: '#000' }]}></Pressable>
          <Pressable onPress={() => {
            setImage(require('../assets/vs_blue.png')),
              setText('Xanh')
          }} style={[styles.rectangle, { backgroundColor: '#234896' }]}>
          </Pressable>
          <Pressable onPress={() => {
            navigation.navigate('Page1', { img: item.image });
          }} style={styles.Button1}>
            <Text style={styles.ButtonText} >  XONG </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: 400,
  },
  textB: {
    marginTop: 10,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '15px',
    fontWeight: 700,
  },
  rectangle: {
    height: '80px',
    width: '85px',
    marginTop: 10,
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  Button1: {
    marginTop: 20,
    height: 44,
    width: 326,
    backgroundColor: '#1951e294',
    borderWidth: 1,
    borderColor: "#c91535",
    borderRadius: 10,
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15
  },
  ButtonText: {
    fontSize: '20px',
    marginTop: 10,
    color: 'rgba(249, 242, 242, 1)',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    textAlign: 'center',
  },

});
export default Page2;

{/* <Button title="Add Task" onPress={() => navigation.navigate('AddTask', { tasks })} /> */ }

// function secondScreen() {
//   return (
//     <View>

//     </View>
//   )
// }
// const AddTaskScreen = ({ navigation, route }) => {
//   const { tasks } = route.params;
//   const [title, setTitle] = useState('');
//   const [deadline, setDeadline] = useState('');

//   const addTask = () => {
//     const id = Math.random().toString(36).substr(2, 9);
//     const newTask = { id, title, deadline };
//     setTasks([...tasks, newTask]); // Update tasks
//     navigation.goBack(); // Go back to MainScreen
//   };

//   return (
//     <View style={{ flex: 1, }}>
//       <Text>Add New Task</Text>
//       <TextInput
//         placeholder="Title"
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//       />
//       <TextInput
//         placeholder="Deadline"
//         value={deadline}
//         onChangeText={(text) => setDeadline(text)}
//       />
//       <Button title="Save Task" onPress={addTask} />
//     </View>
//   );
// };

// const App = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Task 1', deadline: 'Oct 30, 2023' },
//     { id: 2, title: 'Task 2', deadline: 'Nov 5, 2023' },
//   ]);

//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="MainScreen">
//           {(props) => <MainScreen {...props} tasks={tasks} />}
//         </Tab.Screen>
//         {/* <Tab.Screen name="AddTask" component={AddTaskScreen} /> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };