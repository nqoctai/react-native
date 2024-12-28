import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import ListTodo from './components/todo/list.todo';
import FlexBox from './components/todo/flexbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();


  function HomeScreen(props: any) {
    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button title='Go to Detail' onPress={() => navigation.navigate("Details")} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button title='Go user = 1' onPress={() => navigation.navigate("Details", { userId: 1, name: "Ngoc Tai" })} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button title='Go user = 2' onPress={() => navigation.navigate("Details", { userId: 2, name: "SharonM" })} />
        </View>

      </View>
    );
  }

  function DetailsScreen(props: any) {
    const route: any = useRoute();
    const navigation: any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>User Id = {route.params.userId}</Text>
        <Button title='Go to Home' onPress={() => navigation.goBack()} />

      </View>
    );
  }

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
