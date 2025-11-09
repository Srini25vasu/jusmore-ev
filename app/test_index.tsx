import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="http://192.168.2.106:8081/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bfe0bc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#a7187c",
  },
  button: {
    fontSize: 20,
    color: "#18a74a",
    textDecorationLine: "underline",
  },
});
