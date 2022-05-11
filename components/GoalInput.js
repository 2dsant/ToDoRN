import { useState } from "react";

import { StyleSheet, View, TextInput, Modal, Button, Image } from "react-native";
import GoalPng from '../assets/goal.png';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalHandlerInput(value) {
        setEnteredGoalText(value);
    }

    function addGoalHandle() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={GoalPng} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalHandlerInput}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandle} color='#b180f0' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}



export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        marginRight: 8,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})