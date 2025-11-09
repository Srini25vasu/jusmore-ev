//import { Stack } from 'expo-router';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

import Index from './test_index';
import AboutScreen from './about'; // Adjust the path as necessary
import { StatusBar } from 'expo-status-bar';

//const Stack = createStackNavigator();

const linking = {
  prefixes: ['exp://192.168.2.106:8083'],
  config: {
    screens: {
      Home: '',
      About: 'about',
    },
  },
};

export default function RootLayout() {
  return (
   <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="agents-list" options={{ title: 'Agents list' }} />
      {/*<Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />*/}
      <StatusBar style="auto" />
    </Stack>
  );
}



