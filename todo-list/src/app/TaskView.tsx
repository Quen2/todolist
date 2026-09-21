import { useState } from 'react';
import { View, Text } from "react-native";
import AddTaskForm from "@/Components/AddTaskForm";
import TaskList from "@/Components/TaskList";
import {TaskType} from "@/Types/TaskType";

const data = {
    tasks: [
        { id: '1', title: 'Buy fresh sourdough bread and farm eggs', completed: false },
        { id: '2', title: 'Draft quarterly marketing review slides', completed: false },
        { id: '3', title: 'Gym session: leg day workout', completed: true },
        { id: '4', title: 'Review feedback on design system V2', completed: false },
        { id: '5', title: 'Schedule dental clean appointment', completed: true },
    ]
}

export default function TaskView() {
    const [tasks, setTasks] = useState<TaskType[]>(data.tasks);

    function addTask(title: string) {
        if (title .trim() === '') return;
        setTasks([...tasks, { id: Date.now().toString(), title: title, completed: false }]);
    }

    function toggleTask(id: string) {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    }

    function deleteTask(id: string) {
        setTasks(tasks.filter((t) => t.id !== id));
    }

    function modifyTask(id: string, newTitle: string) {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
    }

    return (
        <View className="flex flex-col gap-8">
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onModify={modifyTask}/>
        </View>
    )
}