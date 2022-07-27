import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Button,
  Alert, 
  Platform, 
  StatusBar 
} from 'react-native';

import {
useDimensions,
useDeviceOrientation,
 } from '@react-native-community/hooks';


export default function App() {
  const orientation = useDeviceOrientation();


  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1, 
      flexDirection: "row", // horitzontal
      justifyContent: "center", // main axis
      alignItems: "center", // secondary axis
      
    }}>

    <View  style ={{
      backgroundColor: "dodgerblue",
      width: 100,
      height: 100, 

      // flexShrink: 1, // shrink to fit
      // flexBasis: 100, // width or height 
      
    }}/> 

<View  style ={{
      backgroundColor: "gold",
      width: 100,
      height: 100,
    }}/> 

<View  style ={{
      backgroundColor: "tomato",
      width: 100,
      height: 100, 
    }}/> 
    </View>
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
