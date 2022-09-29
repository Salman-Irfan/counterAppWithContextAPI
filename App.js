import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import FirstContextProvider from './store/context/FirstContext';


export default function App() {
  return (
    <FirstContextProvider>
      <FirstScreen />
    </FirstContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
