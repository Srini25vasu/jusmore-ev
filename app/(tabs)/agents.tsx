import Header from "@/components/ui/Header";
import { useNavigation } from "@react-navigation/native";
import { Button, createTheme, ThemeProvider } from "@rneui/themed";
import React from "react";

const theme = createTheme({
    components: {
        Button: {
            containerStyle: {
                margin: 5,
            },
            buttonStyle: {
                width: "100%",
                borderRadius: 35,
                backgroundColor: "#397af8",
            },
            titleStyle: {
                color: "white",
                fontSize: 16,
            },
        }
    }
});
export default function Agents() {
  const navigation = useNavigation();
  return (  <>
  <Header title="EV Chargers" view="agents" />
  <ThemeProvider theme={theme}>
      <Button title="Find charging stations" onPress={() => navigation.navigate("ev-charging-stations")} />
  </ThemeProvider></>
     
  );

}