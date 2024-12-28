import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const styles = StyleSheet.create({
    text: {
        textTransform: 'uppercase',
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#ccc'
    }
})


interface IProps {
    name: string;
    onPress: () => void;
}

const MineButton = (props: IProps) => {
    const { name, onPress } = props;
    return (
        <Pressable
            style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
            onPress={onPress}>
            <View style={styles.btnContainer}>
                <AntDesign name="pluscircle" size={24} color="black" />
                <Text style={styles.text}>{name}</Text>
            </View>
        </Pressable>
    )
};

export default MineButton;