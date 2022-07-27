import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Platform, StatusBar } from 'react-native';


export default function App() {
  console.log("App Executed");

  const handlePress = () => console.log("Button Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color="orange" 
      title="Click Me" 
      onPress={() => Alert.prompt("Title", "Message", text => console.log(text))}
   />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    
    
  },
});
