import { Button, Text, View } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            <Text>Home component</Text>
            <Button onPress={() => navigation.navigate("Details")} title="Go to Detail"></Button>
        </View >
    )
}

export default Home;