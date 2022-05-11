import React from "react";
import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem} //ios
            >
                <Text style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}


export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "#fff",
        padding: 8,
    },
})

