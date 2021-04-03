import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Color } from '../styles/Color';
import Icon from "react-native-vector-icons/Ionicons"


const { width, height } = Dimensions.get('window')

const CameraScreen = (props) => {

    const cameraRef = useRef()
    const [type, setType] = useState("back")
    const [flash, setFlash] = useState("off")
    const [autoFocus, setAutoFocus] = useState("on")
    const [imageRef, setImageRef] = useState('')


    async function takePicture() {
        if (cameraRef.current) {
            const data = await cameraRef.current.takePictureAsync();
            setImageRef(data.uri)
        }
    };


    function flashMode() {
        setFlash(flash === "off" ? "on" : "off")
    }


    function switchCamera (){
        setType(type === "back" ? "front" : "back")
    }




    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                style={{
                    flex: 1,
                    justifyContent: 'space-between'

                }}
                type={type}
                flashMode={flash}
                autoFocus={autoFocus}
                zoom={0}
                whiteBalance={"auto"}
                ratio='16:9'
                focusDepth={0}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                
            >
                <View style={styles.content}>
                    <View style={styles.cameraSwitch }>
                        <Icon name="sync-circle-outline"  size={55} color={Color.white}  onPress={()=>switchCamera()} />
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.image}>
                            <Image style={{ width: 60, height: 60, resizeMode: "cover", borderRadius: 30 }} source={{ uri: imageRef }} />
                        </View>
                        <TouchableOpacity
                            style={styles.takePicButton}
                            onPress={() => takePicture()}
                        />
                        <TouchableOpacity
                            style={{ marginTop: 40 }}
                            onPress={() => flashMode()}
                        >
                            <Icon name={flash === "off" ? "flash-off-outline" : "flash-outline"} size={40} color={Color.white} />
                        </TouchableOpacity>

                    </View>

                </View>




            </RNCamera>






        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#000',
    },
    takePicButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.white
    },
    footer: {
        width: width,
        height: 130,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },

    flipText: {
        color: 'white',
        fontSize: 15,
    },
    content : {
        flex : 1,
        alignItems :"flex-end",
        justifyContent : "space-between"
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
        marginTop: 40
    },
    cameraSwitch : {
        width : width,
      
        flexDirection:"row",
        alignItems : "center",
        justifyContent:"flex-end",
        paddingRight : 25,
        paddingTop:20
    }

});