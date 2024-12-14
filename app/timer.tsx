import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
const BREAK_TIME_SECONDS = 0.1 * 60 * 1000;

export default function App() {
    const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer|null>(null);

    const startTimer = () => {
        const id = setInterval(() => setTimerCount(prev => prev - 1000), 1000);
        setTimerInterval(id);
    };

    const stopTimer = () => {
        if(timerInterval != null) {
            clearInterval(timerInterval);
        }
    };

    const timerDate = new Date(timerCount);

    return (
        <View style = {styles.container}>
            <Button title = "Start timer" onPress = {startTimer} />
            <View style = {{margin : 10}}></View>
            <Button title = "Stop timer" onPress = {stopTimer} />
            <Text>{timerDate.getMinutes()}:{timerDate.getSeconds()}</Text>
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