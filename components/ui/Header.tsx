import { StyleSheet, Text, View, Linking } from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  SafeAreaView,
  SafeAreaInsetsContext,
} from "react-native-safe-area-context";

type HeaderComponentProps = {
  title: string;
  view?: string;
};

export default function Header({ title, view }: HeaderComponentProps) {
  return (
    <HeaderRNE
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: title, style: styles.heading }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("http://192.168.2.106:8081/" + view);
            }}>
            <Icon name="rocket1" type="antdesign" color="white" />
          </TouchableOpacity>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
