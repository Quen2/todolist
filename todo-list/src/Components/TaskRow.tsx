import {Text, View, Button, Pressable, TextInput} from "react-native";
import {TaskType} from "@/Types/TaskType";
import { Checkbox } from "expo-checkbox"
import {StyleSheet} from "react-native";
import Modify from "../../assets/Modify.svg"
import Trash from "../../assets/Trash.svg"
import {useState} from "react";

export default function TaskRow(props: {
    task: TaskType;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onModify: (id: string, newTitle: string) => void;
}) {

    const [modifying, setModifying] = useState(false);

    function handleSubmitEditing() {
        setModifying(false);
        props.onModify(props.task.id, props.task.title);
    }

    return (
        <View style={styles.container}>
            <Checkbox
                value={props.task.completed}
                onValueChange={() => props.onToggle(props.task.id)}
                color={props.task.completed ? "#4F46E5" : undefined}
            />
            { modifying ?
                <TextInput
                    value={props.task.title}
                    onChangeText={(text) => props.onModify(props.task.id, text)}
                    onSubmitEditing={handleSubmitEditing}
                />  :
                <>
                    <Text style={[styles.title, props.task.completed && styles.titleCompleted]}>
                        {props.task.title}
                    </Text>
                    <Pressable onPress={() => setModifying(true)}>
                        <Modify width={12} height={12} color="#1E1E1E"/>
                    </Pressable>
                </>
            }
            <Pressable onPress={() => props.onDelete(props.task.id)}>
                <Trash width={12} height={12} color="#E54E46" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#F3F4F6",
        paddingHorizontal: 16,
        paddingVertical: 14
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        fontSize: 15,
        color: '#111827',
        width: '55%'
    },
    titleCompleted: {
        textDecorationLine: 'line-through',
        color: '#9CA3AF'
    }
})