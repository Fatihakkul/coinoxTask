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

    const goHome =()=>{
        if(code === "1234"){
            props.navigation.navigate('home')
        }else 
            Alert.alert("Geçersiz Pincode" , "Lütfen tekrar deneyiniz" )
    }

    const renderList = ({ item }) => {
        if (item.lastitem) {
            return (

                <TouchableOpacity onPress={deleteLastNumber} >
                    <View style={[styles.listItem]}>
                        <Icon name="arrow-back-outline" size={25} color={Color.white} />
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
                <Icon name="chevron-back-outline" size={35} color="white" />
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
                <View style={styles.inputContainer}>
                    <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={[...data, { lastitem: true }]}
                        renderItem={renderList}
                        numColumns={numColumns}
                        contentContainerStyle={{ alignSelf: "center", marginTop: 40 }}

                    />
                    <View style={styles.inputContainer}>
                        <TouchableOpacity onPress={goHome}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ae5fed', '#9638e0', '#7300cf']} style={styles.button}>
                                <Text style={styles.text}>Enter</Text>
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
        backgroundColor: Color.primary,
        alignItems: "center",

    },
    header: {
        width: width,
        height: 50,
        paddingLeft: 20,
        justifyContent: "flex-end"

    },
    text: {
        color: Color.white,
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
        backgroundColor: Color.buttonBackground,
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
        flex: 1,
        alignItems: "center",
        marginTop: 40,

    },
    activeContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    }
})

export { CodeScreen }