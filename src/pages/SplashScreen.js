import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native"
import { Color } from "../styles/Color"
import EncryptedStorage from 'react-native-encrypted-storage';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get("window")

const SplashScreen = (props) => {


    const [userName, setUserName] = useState("")
    const [userPass, setUserPass] = useState("")
    const [noUser, setNoUser] = useState(false)

    useEffect(() => {
        getPassword()
    }, [])


    const getPassword = async () => {
        try {
            const userData = await EncryptedStorage.getItem("user");
            if (userData === null) {
                setNoUser(true)

            } else {
               props.navigation.navigate('codescreen', { user: JSON.parse(userData) })
            }
        } catch (error) {
            alert("something went wrong")

        }
    }
    const savePassword = async () => {
        if (userName === '' || userPass === '') {
            Alert.alert("Error", "Password or username is required")
        } else {
            try {
                await EncryptedStorage.setItem(
                    "user",
                    JSON.stringify({
                        username: userName,
                        pincode: userPass
                    })
                );
                props.navigation.navigate('codescreen' , {user : {username:userName , pincode : userPass}})
            } catch (error) {
                alert("something went wrong")
               
            }
        }

    }


    return (
        <SafeAreaView style={styles.container}>

            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>COINOXS</Text>
            </View>


            {noUser ?
                <Animatable.View
                    animation="fadeInUpBig"
                    duration={2000}
                    style={{ backgroundColor: Color.background_black }}
                >
                    <View style={styles.content}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Please enter username"
                                style={{ color: Color.title_color, letterSpacing: 1 }}
                                onChangeText={(e) => setUserName(e)}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Please enter pincode"
                                style={{ color: Color.title_color, letterSpacing: 1 }}
                                onChangeText={(e) => setUserPass(e)}
                                maxLength={4}
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity onPress={savePassword}>
                            <View style={styles.button}>
                                <Text style={[styles.title, { fontSize: 20, color: Color.settinText }]}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                :
                null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background_black,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        letterSpacing: 2,
        color: Color.title_color
    },
    content: {
        width: width,
        height: height * 0.2,
        alignItems: "center",
    },
    inputContainer: {
        width: width * 0.7,
        height: 40,
        backgroundColor: Color.settinText,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginTop: 10
    },
    button: {
        width: width * 0.65,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        backgroundColor: Color.title_color,
        borderRadius: 15,
        marginTop: 15
    }

})
export { SplashScreen }