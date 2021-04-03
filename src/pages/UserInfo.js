import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from "react-native"
import { Color } from "../styles/Color"

const { width, height } = Dimensions.get("window")

const UserInfo = (props) => {

    const user = props.route.params.item


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: "https://picsum.photos/200" }} />
                </View>
                <Text style={styles.name}>{user.username}</Text>
            </View>
            <View style={styles.content}>
                <ScrollView>


                    <View style={styles.title}>
                        <Text style={styles.name}>User Info</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>Name: <Text style={[styles.name, { color: Color.settinText }]}> {user.name}</Text></Text>
                        <Text style={styles.name}>Email: <Text style={[styles.name, { color: Color.settinText }]}>{user.email}</Text> </Text>
                        <Text style={styles.name}>Phone: <Text style={[styles.name, { color: Color.settinText }]}> {user.phone}</Text></Text>
                        <Text style={styles.name}>Website: <Text style={[styles.name, { color: Color.settinText }]}> {user.website}</Text></Text>
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.name}>User Adress</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>City: <Text style={[styles.name, { color: Color.settinText }]}> {user.address.city}</Text></Text>
                        <Text style={styles.name}>Street: <Text style={[styles.name, { color: Color.settinText }]}>{user.address.street}</Text> </Text>
                        <Text style={styles.name}>Suite: <Text style={[styles.name, { color: Color.settinText }]}> {user.address.suite}</Text></Text>
                        <Text style={styles.name}>Zipcode: <Text style={[styles.name, { color: Color.settinText }]}> {user.address.zipcode}</Text></Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.name}>User Company Info</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>BS: <Text style={[styles.name, { color: Color.settinText }]}> {user.company.bs}</Text></Text>
                        <Text style={styles.name}>Catch Phrase: <Text style={[styles.name, { color: Color.settinText }]}>{user.company.catchPhrase}</Text> </Text>
                        <Text style={styles.name}>Name: <Text style={[styles.name, { color: Color.settinText }]}> {user.company.name}</Text></Text>

                    </View>
                </ScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 2,
        backgroundColor: Color.white,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: "contain"
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden"
    },
    name: {
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing: 1,
        marginTop: 10
    },
    content: {
        flex: 5,
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    userInfo: {
        width: width * 0.95,
        padding: 10,
        backgroundColor: Color.white,
        borderRadius: 15
    },
    title: {
        width: width * 0.95,
        paddingLeft: 5,
        paddingVertical: 10
    }
})
export { UserInfo }