Followed the following guide
https://docs.expo.dev/tutorial/create-your-first-app/

to run react_native app:
 npx create.expo-app@latest

To install React native elements:
 npm install @rneui/themed @rneui/based

Following tanstack query for fetching data to AgentListScreen

https://tanstack.com/query/latest/docs/framework/react/examples/react-native

added dependencies
npm i @tanstack/react-query, npm i @react-navigation/stack

commands used:
npm run web
npx expo prebuild
npx expo run:android
npm expo line_style

To install npm install -g eas-cl

UI libraries
 Universal schadcn/ui
 promising
  - Gluestack UI v2
  - Natwind UI paid components look good $230 for life time access

Ref: https://javascript.plainenglish.io/shadcn-in-react-native-64a8a4e1d4b5

In this project follow this tutorial from expo to build screen later you can think of other UI:
 - https://docs.expo.dev/tutorial/build-a-screen

 React Native Elements also looks promising: React native components can also be used along with React Native elements

  https://reactnativeelements.com/docs/components/airbnbrating

Good article about choosing UI libraray:
 https://instamobile.io/react-native-tutorials/react-native-ui-libraries/

Decided to use React Native elements:
 npm install @rneui/themed  @rneui/base

To build side menu:
 install:
  npm install @react-navigation/native, @react-navigation/drawer, @react-navigation/native-stack, react-nativescreen_share
  react-native-safe-area-context, react-native-gesture-handler, react-native-reanimated  

For Event streams via sserver side events (SSE)
 npm i react-native-sse

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
