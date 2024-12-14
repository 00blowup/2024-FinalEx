import { Text, View, Button } from "react-native";
import { router } from "expo-router";

var text_st = {fontSize: 20, margin: 10};

export default function Index() {
    return (
        <View>
            <Text style = {text_st}>Home Screen</Text>
            <Button title = "Timer"
                onPress = { function() { router.navigate('timer') } }
            />
            <View style = {{height: 10}}></View>
        </View>
    );
}
