import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import TaskScreen from '../screens/TaskScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='UserList' component={UserListScreen}/>
        <Stack.Screen name='UserDetails' component={UserDetailScreen}/>
        <Stack.Screen name='Task' component={TaskScreen}/>

    </Stack.Navigator>
  )
}; 

export default Routes;