import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Alert
} from "react-native"
import { Color } from "../styles/Color"
import Icon from "react-native-vector-icons/Ionicons"
import SmoothPinCodeInput from "react-native-smooth-pincode-input"
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window')


const CodeScreen = (props) => {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0]
    const numColumns = 3;
    const user = props.route.params.user
    const [code, setCode] = useState('')
   


    function setValue(e) {
        if (code.split('').length < 4)
            setCode(code + e)
    }

    const deleteLastNumber = () => {
        let newArr = code.split('')
        if (newArr.length > -1) {
            newArr.splice(newArr.length - 1, 1)
        }
        setCode(newArr.join(''))
    }

    const goHome = () => {
        if (code === user.pincode) {
            props.navigation.navigate('home')
        } else
            Alert.alert("Invalid Pincode", "Please try again")
    }

    const renderList = ({ item }) => {
        if (item.lastitem) {
            return (

                <TouchableOpacity onPress={deleteLastNumber} >
                    <View style={[styles.listItem]}>
                        <Icon name="arrow-back-outline" size={25} color={Color.title_color} />
                    </View>
                </TouchableOpacity>

            )
        } else if (item === "") {
            return (
                <View style={[styles.listItem, { backgroundColor: "transparent" }]}></View>
            )
        }
        else {
            return (
                <TouchableOpacity onPress={() => setValue(item)} >
                    <View style={styles.listItem}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="chevron-back-outline" size={35} color={Color.title_color} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Enter pin-code</Text>
            </View>
            <View style={styles.activeContent}>

                <SmoothPinCodeInput
                    placeholder={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 25,
                        opacity: 0.3,
                        backgroundColor: Color.white,
                    }}></View>}
                    mask={<View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 25,
                        backgroundColor: Color.white,
                    }}></View>}
                    maskDelay={1000}
                    password={true}
                    cellStyle={null}
                    cellStyleFocused={null}
                    value={code}
                    onTextChange={code => setCode(code)}
                />
                <View style={[styles.inputContainer,{flex: 1,paddingTop:80}]}>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={[...data, { lastitem: true }]}
                        renderItem={renderList}
                        numColumns={numColumns}
                        contentContainerStyle={{ alignSelf: "center", marginTop: 40 }}
                        scrollEnabled={false}
                    />
                    <View style={[styles.inputContainer,{marginBottom:60}]}>
                        <TouchableOpacity onPress={goHome}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.title_color, '#a69647', Color.settinText]} style={[styles.button,{borderRadius:5}]}>
                                <Text style={[styles.text,{color : Color.settinText}]}>Enter</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background_black,
        alignItems: "center",

    },
    header: {
        width: width,
        height: 50,
        paddingLeft: 20,
        justifyContent: "flex-end"

    },
    text: {
        color: Color.title_color,
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 1

    },
    titleContainer: {
        width: width,
        height: 40,
        paddingLeft: 25,
        marginVertical: 30,

    },
    listItem: {
        width: 90,
        height: 50,
        backgroundColor: Color.settinText,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 15
    },
    button: {
        width: width * 0.9,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        alignItems: "center",
        
     },
    activeContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    }
})

export { CodeScreen }