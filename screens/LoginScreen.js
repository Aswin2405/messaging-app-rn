import React, { useEffect, useState } from 'react'
import { StatusBar } from  "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native'
import { Button,Input,Image } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';
const LoginScreen = ({navigation}) => {
    const [email,setEmail]= useState("")
    const [password, setPassword] = useState("")
    useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged(authUser=>{
    if(authUser){
        navigation.replace("Home")
    }
})
return unsubscribe
    },[])
    const signIn=()=>{
        auth.signInWithEmailAndPassword(email,password)
        .catch(error=>alert(error))
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri:"https://cdn3.iconfinder.com/data/icons/phone-system-app-fill-line-combine/64/Phone_System_App-03-512.png"
            }}
            style={{width:200,height:200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input type="password" placeholder="Password" secureTextEntry value={password} onChangeText={text=>setPassword(text)}
                onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn}/>
            <Button onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} title="Register" type="outline"/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer:{
width:300
    },
    button:{
        width:200,
        marginTop:10
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    }
})
