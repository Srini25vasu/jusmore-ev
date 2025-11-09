import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b8e759",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        color: "#18a74a",
    },
});