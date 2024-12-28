import { Button, Text, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native";

const Like = () => {
    const navigation: any = useNavigation();

    return (
        <View>
            <Text>Like component</Text>
            <Button onPress={() => navigation.navigate("LikeDetails")} title="Go to Like Details"></Button>

        </View >
    )
}

export default Like;