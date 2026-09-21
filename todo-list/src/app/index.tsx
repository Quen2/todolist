import { Text, View } from "react-native";
import Header from "../Components/Header";
import TaskView from "@/app/TaskView";

export default function Index() {
  return (
    <View className="bg-white h-full px-[24px] pt-[24px] pb-[48px] gap-8">
        <Header />
        <TaskView />
    </View>
  );
}

