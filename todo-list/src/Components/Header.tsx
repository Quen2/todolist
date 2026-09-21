import {Text, View, StyleSheet } from "react-native";

const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
});

export default function Header() {
    return (
        <View>
            <Text style={styles.title}>Today</Text>
            <Text style={styles.date}>{today}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Poppins-Bold",
        fontWeight: "700",
        fontSize: 28,
        color: "#111827"
    },
    date: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        color: "#9CA3AF",
        fontSize: 14

    }
});