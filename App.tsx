import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {


  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
    { id: 4, name: "Task 4" },
    { id: 5, name: "Task 5" },
    { id: 6, name: "Task 6" },
    { id: 7, name: "Task 7" },
    { id: 8, name: "Task 8" },
    { id: 9, name: "Task 9" },
    { id: 10, name: "Task 10" },
  ]);


  return (
    <View style={styles.container}>

      <InputTodo />
      <ListTodo todoList={todoList} />


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60,
    paddingTop: 10,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  test: {
    color: 'red',
  },
});
