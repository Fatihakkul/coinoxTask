import React from "react"
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import { Color } from "../styles/Color"
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

const { width } = Dimensions.get("window")

const SearchBar = (props) => {

    const router = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>router.navigate('camerascreen')}>
                <Icon name="camera" size={20} color="black"/>
            </TouchableOpacity>
           
            <View style={styles.inputContainer}>
                <Icon name="search" color="black" size={20} />
                <TextInput
                    value={props.value}
                    onChangeText={props.onChangeText}
                    style={styles.text}
                    placeholder={props.placeholder}
                    placeholderTextColor="black"
                />
                <Icon name={props.name.name} size={20}  color="black"  onPress={props.selectFilter}/>
            </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : width,
        height : 50,
        backgroundColor :Color.title_color,
        alignItems :"center",
        justifyContent :"center",
        flexDirection:"row",
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15

    },
    inputContainer : {
        width : width*0.85,
        height:38,
        backgroundColor : Color.white,
        borderRadius:15,
        paddingLeft:10,
        alignItems :"center",
        flexDirection :"row",
        marginLeft:4
        
    },
    text: {
        color:"black",
        letterSpacing:1,
        fontWeight:"600" , 
        marginLeft:10 ,
        width : width*0.666
    },
    button : {
        width:30,
        height:30,
        backgroundColor:Color.title_color,
        alignItems:"center",
        justifyContent:"center"
    }
})
export { SearchBar }