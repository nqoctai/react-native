import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("");


  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.test}>{name}</Text>
        <Text style={styles.test}>{age}</Text> */}

        <Text style={styles.test}>{name}</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric'
          multiline
          style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
          }} />



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
