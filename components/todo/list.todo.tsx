
import React from 'react';
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    todo: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'lightgray',
        marginBottom: 10
    },
})

interface IProps {
    todoList: ITodo[];
    deleteTodo: (id: number) => void;
}

const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props;
    return (
        <>
            <FlatList style={{
                marginTop: 20, borderColor: 'black',
                borderWidth: 1,
            }}
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                            <Text style={styles.todo}

                            >{item.name}</Text>
                        </TouchableOpacity>

                    )
                }}
            />
        </>
    )
}

export default ListTodo;