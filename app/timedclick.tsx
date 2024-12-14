import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const TIME_LIMIT = 5 * 1000;

export default function App() {
    const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT); // 남은 시간(단위는 밀리초)
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer|null>(null);

    const [clickable, setClickable] = useState(false);    // 클릭 시작을 눌렀는지 여부

    const startTimer = () => {
            const id = setInterval(() => setTimeRemaining(prev => prev - 1000), 1000);
            setTimerInterval(id);
    };

    const stopTimer = () => {
        if(timerInterval != null) {
            clearInterval(timerInterval);
        }
    };

    const timerDate = new Date(timeRemaining);

    // 아래 useEffect는, 클릭 제한시간이 0초가 되었을 때 실행되는 코드
    useEffect(() =>{
        if (timeRemaining == 0){
            stopTimer();    // 타이머 멈추기
            setClickable(false); // 버튼 비활성화
            setTimeRemaining(TIME_LIMIT);    // 제한시간 초기화
            }
        }
    );

    return (
        <View style = {styles.container}>
            <Button title = "Click to Start Clicking"
            onPress = {() => {
                setClickable((prev) => !prev);
                startTimer();
                }}
            />
            {clickable ?
                (<TouchableOpacity style = {styles.activeBtn}>
                    <Text style = {{color: 'white'}}>You have {timerDate.getSeconds()} seconds left to click here!</Text>
                </TouchableOpacity>)
                :
                (<TouchableOpacity style = {styles.inactiveBtn}>
                    <Text style = {{color: 'white'}}>Inactive</Text>
                </TouchableOpacity>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        },
    activeBtn: {
        backgroundColor: 'red',
        padding: 10
        },
    inactiveBtn: {
        backgroundColor: 'blue',
        padding: 10
        }
    }
);