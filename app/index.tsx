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
            <Button title = "Click Count"
                onPress = { function() { router.navigate('clickcount') } }
            />
            <Button title = "Activating Buttons"
                onPress = { function() { router.navigate('btnactivate') } }
            />
            <Button title = "Time Limited Button"
                onPress = { function() { router.navigate('timedclick') } }
            />
            <View style = {{height: 10}}></View>
        </View>
    );
}
