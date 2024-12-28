import { StyleSheet, Text, View } from "react-native"
import React from "react"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        borderWidth: 2,
        borderColor: 'red',
    },
    item1: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'violet',
    },
    item2: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'blue',
    },
    item3: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'green',
    },
    item4: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: 'yellow',
    }

})
const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item4</Text>
            </View>


        </View>
    )
}
export default FlexBox;