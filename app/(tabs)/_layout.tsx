import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Tabs } from "expo-router";

import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarButton: HapticTab,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <IconSymbol name="house.fill" size={28} color={color} />
            ),
          }}
        />
         <Tabs.Screen
          name="agents"
          options={{
            title: "Chargers",
            tabBarIcon: ({ color }) => (
              <IconSymbol name="paperplane.fill" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
