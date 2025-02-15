import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

import MineButton from '../button/mine.button';

const styles = StyleSheet.create({
    todoInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
})

interface IProps {
    addTodo: (v: string) => void;
}

const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert("Thông tin không hợp lệ", "Tiêu đề không được để trống", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
            ])
            return;
        }
        addTodo(name);
        setName("");
    }
    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='numeric'
                    multiline
                    style={styles.todoInput} />

                <MineButton name='add new' onPress={handleAddNewTodo} />

            </View>

        </>
    )
}

export default InputTodo;