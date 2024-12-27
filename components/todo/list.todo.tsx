
import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    todo: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'lightgray',
        marginBottom: 10,
    },
})

interface IProps {
    todoList: ITodo[];
}

const ListTodo = (props: IProps) => {
    const { todoList } = props;
    return (
        <>
            <FlatList style={{ marginTop: 20 }}
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.todo}>{item.name}</Text>
                    )
                }}
            />
        </>
    )
}

export default ListTodo;