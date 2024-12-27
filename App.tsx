import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("Dang Ngoc Tai");
  const [age, setAge] = useState<number>(20);

  const [person, setPerson] = useState<{ name: string, age: number }>({ name: "Dang Ngoc Tai", age: 20 });

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.test}>{name}</Text>
        <Text style={styles.test}>{age}</Text> */}
        <Text style={styles.test}>{person.name}</Text>
        <Text style={styles.test}>{person.age}</Text>

      </View>
      <Text>Hello World!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  test: {
    color: 'red',
  },
});
