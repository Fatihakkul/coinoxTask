import React from "react"
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet
} from "react-native"
import { Color } from "../styles/Color"
import Icon from "react-native-vector-icons/Ionicons"

const { width } = Dimensions.get("window")

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon name="search" color="black" size={20} />
                <TextInput
                    value={props.value}
                    onChangeText={props.onChangeText}
                    style={{color:"black" , marginLeft:10 , width : width*0.666}}
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
        backgroundColor :Color.white,
        alignItems :"center",
        justifyContent :"center",
        flexDirection:"row"
    },
    inputContainer : {
        width : width*0.85,
        height:38,
        backgroundColor : 'rgba(209, 209, 209,0.2)',
        borderRadius:15,
        paddingLeft:10,
        alignItems :"center",
        flexDirection :"row"
        
    }
})
export { SearchBar }