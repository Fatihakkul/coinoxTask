import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from "react-native"
import { Color } from "../styles/Color"
import Icon from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("window")

const UserListItem = (props) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.imageContainer}>
                    <Image style={{ width: 60, height: 60, borderRadius: 30, resizeMode: "contain" }} source={{ uri: "https://picsum.photos/200" }} />
                </View>
                <View>
                    <Text style={[styles.text,{fontWeight:"bold"}]}>{props.data.name}</Text>
                    <Text style={[styles.text,{fontWeight : "600"}]}>{props.data.email}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={props.onPress}>
                <Icon  name="chevron-forward-outline" size={25} color={Color.title_color} />
            </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: 80,
        backgroundColor: "#242424",
        borderRadius: 30,
        marginVertical: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal :10
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
        marginRight:10
    },
    info : {
        alignItems :"center",
        flexDirection:"row"
    },
    text : {
        color : Color.title_color,
        letterSpacing:1,
        fontSize:12
    }
})
export { UserListItem }