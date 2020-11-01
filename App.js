import React from 'react';
import {View,Text} from 'react-native';
//import Pro from "./src/screens/Pro";
import Test from "./src/screens/Test";

//import Profilescreen from "./src/screens/Profilescreen";
//import Onboarding from "./src/screen/Onboarding"



export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
          <Test/>
      </View>
    );
  }
}