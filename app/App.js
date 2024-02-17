import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './src/pages/Login';
import Registration from './src/pages/Registration';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    // <View style={styles.container} className="font-bold">
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Login} />
    //     <Stack.Screen name="Details" component={Registration} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Text>This is another screen</Text>
      <Button title="Go to Home Screen" onPress={goToHomeScreen} />
    </View>
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
