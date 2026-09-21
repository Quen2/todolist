import { useState } from 'react';
import { View, FlatList } from "react-native";
import TaskRow from "@/Components/TaskRow";
import {TaskType} from "@/Types/TaskType";

type Props = {
    tasks: TaskType[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onModify: (id: string, newTitle: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete, onModify }: Props) {

    return (
        <View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TaskRow task={item} onToggle={onToggle} onDelete={onDelete} onModify={onModify}
                    />
                )}
            />
        </View>
    )
}