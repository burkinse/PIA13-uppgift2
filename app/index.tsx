import { useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, Button, TextInput } from 'react-native';

export default function Index() {


  const [counter, setCounter] = useState(0);
  
  function dosomeplus() {
    
      setCounter(counter + 1);
  }
  


  function dosomeminus() {
    setCounter(counter - 1);

    if (counter <= 0) {
      setCounter(0);
    }
  }



  function reset () {
    setCounter(0);
  }




  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >



      <Text style= {{fontSize: 150}}>{counter}</Text>


      <View style={{ flexDirection:"row" }}>
      

      <View style={{ backgroundColor: "darkgreen", width : 175, height: 60, marginEnd: 5, justifyContent: 'center', alignItems: "center", marginBottom: 10}}>
      <Button
        onPress={dosomeplus}
        title="PLUS"
        color="white"

      />
      </View>

      <View style={{ backgroundColor: "red", width : 175, height: 60, justifyContent: 'center', alignItems: "center"}}>
      <Button
        onPress={dosomeminus}
        title="MINUS"
        color="white"
      />
      </View>
      </View>

      
      {counter > 0 && (
      <View style={{ backgroundColor: "blue", width : 175, height: 40, justifyContent: 'center', alignItems: "center"}}>
      <Button
        onPress={reset}
        title="Reset"
        color="white"
      />
      </View>

      )}
    </View>
  );
}