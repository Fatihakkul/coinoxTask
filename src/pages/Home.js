import React, { useState, useEffect } from "react"
import {
    View,
    Text,
    Alert,
    FlatList,
    StyleSheet,
    Dimensions,
    StatusBar
} from "react-native"
import Axios from "axios"
//import constant
import { API } from "../constant/api"
//import components
import {
    UserListItem,
    SearchBar
} from "../components"
import { Color } from "../styles/Color"



const { width, height } = Dimensions.get("window")

const Home = (props) => {

    const [userList, setUserList] = useState([])
    const [searchUserList, setSearchUserList] = useState([])
    const [filterString, setFilterString] = useState("")
    const [filter, setFilter] = useState({name :"mail"})


    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {

        let response = await Axios.get(API.base_url)
        console.log(response)
        if (response.data.length > 0) {
            setSearchUserList(response.data)
            setUserList(response.data)
        } else {
            console.log(response.data)
            Alert.alert("Error", "Bir hata oluştur")
        }
    }


    const filterList = (e) => {

        let arr = searchUserList.filter((item) => {
            const itemData =filter.name === "mail" ? item.email.toUpperCase() : item.name.toUpperCase()
            const search = e.toUpperCase()
            return itemData.indexOf(search) > -1
        })
        console.log(arr)
        setUserList(arr)
        setFilterString(e)
    }


    const renderList = ({ item }) => <UserListItem data={item} onPress={()=>props.navigation.navigate('userinfo', {item,})} />


    return (
        <View style={styles.container}>
            {/* Burada name obje olarak gönderiyorum çünkü ilkel veri tipinin değişmesi componenti güncellemiyor */}
            <SearchBar name={filter} value={filterString} placeholder={`Search user with ${filter.name === "mail" ? "email" : "name"} `} onChangeText={(e)=>filterList(e)} selectFilter={()=>setFilter(filter.name === "mail" ?{ name:"mail-outline"} : {name : "mail"} )}/>
            <View style={styles.content}>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={userList}
                    renderItem={renderList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    content :{
        alignItems:"center",
        flex :1,
       
    }
})
export { Home }