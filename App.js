import React, { useEffect } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import EncryptedStorage from 'react-native-encrypted-storage';


const App = () => {


  useEffect(() => {
   
  }, [])


  const getPassword = async () => {



  try {   
    const session = await EncryptedStorage.getItem("user_session");

    if (session !== undefined) {
          alert(session)
        // Congrats! You've just retrieved your first value!
    }
} catch (error) {
  alert(error)
    // There was an error on the native side
}



  }

  const savePassword =async()=>{
    try {
      await EncryptedStorage.setItem(
          "user_session",
          JSON.stringify({
              age : 21,
              token : "ACCESS_TOKEN",
              username : "emeraldsanto",
              languages : ["fr", "en", "de"]
          })
      );

      alert("kaydedildi")
      // Congrats! You've just stored your first value!
  } catch (error) {
    alert("error")
      // There was an error on the native side
  }
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text>dfsdf3</Text>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={savePassword} style={{ width: 200, height: 50, backgroundColor: "red" }}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={getPassword} style={{ width:200, height: 50, backgroundColor: "red" }}>
          <Text>getir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default App