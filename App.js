import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from "./src/pages/HomePage";
export default function App() {
  return (
      <View className='flex-1 justify-center items-center bg-white'>
          <HomePage/>

        {/*<Text>Open up App.js to start working on your app !</Text>*/}
        {/*  <Text>Hello world</Text>*/}
        {/*<StatusBar style="auto"/>*/}
      </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
