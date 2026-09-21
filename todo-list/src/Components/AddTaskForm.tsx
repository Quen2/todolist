import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import Add from "../../assets/Add.svg"

type Props = {
    addTask: (title: string) => void;
}

export default function AddTaskForm({ addTask }: Props) {
    const [newTask, setNewTask] = useState('');

    function handleAddTask() {
        addTask(newTask);
        setNewTask('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                value={newTask}
                onChangeText={setNewTask}
            />
            <Pressable style={styles.addButton} onPress={handleAddTask}>
                <Add width={11.67} height={11.67} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
        width: '100%',
    },
    input: {
        flex: 1,
        height: 44,
        borderRadius: 10,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: "#F3F4F6",
    },
    addButton: {
        backgroundColor: "#111827",
        borderRadius: 10,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        width: 11.67,
        height: 11.67,
        top: 4.17,
        bottom: 4.17,
        color: "#FFFFFF",
        textAlign: "center",
    },
});