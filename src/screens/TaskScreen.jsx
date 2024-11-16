import { View, Text, FlatList, Button, StyleSheet, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';
import Error from '../components/Error';
import Loader from '../components/Loader';

const TaskScreen = () => {
  const {tasks, loading, error, removeTask, newTaskTitle, setNewTaskTitle, addTask } = useContext(TaskContext);
  return (
    <View style={{flex:1, backgroundColor: '#FBF4DB'}}>
      {
        loading ? (
          <Loader/>
        ) : error ? (
          <Error/>
        ) : (
          <>
          <FlatList 
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>
                  {item.title.length > 20 
                  ? item.title.slice(0, 30) + '...' 
                  : item.title}
                </Text>
                <Button 
                title='Remove' 
                color={'blue'} 
                onPress={() => removeTask(item.id)} 
                />
              </View> 
            )}
          />
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              value={newTaskTitle} 
              placeholder='New Task Title' 
              onChangeText={setNewTaskTitle} 
            />
            <Button title='Add Task' color='blue' onPress={() => addTask(newTaskTitle)} />
          </View>
        </>
        )
      }
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  item:{
    padding: 15, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FC8F54',
    borderRadius: 10, 
    shadowColor: 'gray',
    shadowOffset: {width: 2, height:2},
    shadowOpacity:0.2,
    shadowRadius:2,
  },
  title:{
    color: "#000111",
    fontSize: 16,
    fontWeight:'400',
    
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 20,
    shadowColor: '#000',
    
  },
  input: {
    backgroundColor: '#f1f1ff',
    height: 44,
    borderWidth: 1,
    width: '75%',
    padding: 5,
    borderRadius: 5,
    borderColor: '#ccc',
    fontSize:16,
  },
  
})