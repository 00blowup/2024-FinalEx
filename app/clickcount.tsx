import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const [clickCount, setClickCount] = useState(0);

    const countClick = () => {
        setClickCount(clickCount +1);
    };

    return (
        <View style = {styles.container}>
            <Button title = "Click" onPress = {countClick}/>
            <Text>{clickCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        }
    });