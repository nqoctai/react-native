import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


const styles = StyleSheet.create({
    todoInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
})

const InputTodo = () => {

    const [name, setName] = useState<string>("");
    return (
        <>
            <View>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='numeric'
                    multiline
                    style={styles.todoInput} />

                <Button title="ADD NEW" onPress={() => {
                    alert("Hello World!");
                }} />
            </View>
        </>
    )
}

export default InputTodo;