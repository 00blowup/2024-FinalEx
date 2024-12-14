import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
    const [startClicked, setStartClicked] = useState(false);    // 클릭 시작을 눌렀는지 여부
    const [btnClicked, setBtnClicked] = useState(false);

    return (
        <View style = {styles.container}>
            <Button title = "Click Change the State of the Button Below" onPress = {() => setStartClicked((prev) => !prev)} />
            {startClicked ?
                (<TouchableOpacity style = {styles.activeBtn} onPress = {() => setBtnClicked(true)}>
                    <Text style = {{color: 'white'}}>Active</Text>
                </TouchableOpacity>)
                :
                (<TouchableOpacity style = {styles.inactiveBtn}>
                    <Text style = {{color: 'white'}}>Inactive</Text>
                </TouchableOpacity>)
            }
            {btnClicked ?
                (<Text>The Button is clicked!</Text>)
                :
                (<Text></Text>)
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