import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Alert } from "react-native";
import React, { useState, useSyncExternalStore } from "react";

const Register = () => {
  const [name,setName] =useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [number,setNumber] = useState('');
  const [loading,setLoading] = useState(false);
  //!function
  const submitFunction =()=>{
    try {
      setLoading(true);
      if(!name | !password | !number | !email){
        Alert.alert("Please fill all fields");
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>

      <View style={styles.name}>
        <Text style={styles.text}>Name <Text style={styles.dot}>*</Text></Text>
        <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} autoCorrect={false}  placeholder="Enter your name" />
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>Email <Text style={styles.dot}>*</Text></Text>
        <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} autoComplete="email" keyboardType="email-address" placeholder="Enter your email" />
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>Mobile Number <Text style={styles.dot}>*</Text> </Text>
        <TextInput style={styles.input} value={number} onChangeText={(text)=>setNumber(text)} keyboardType="phone-pad"  placeholder="Enter your Number" />
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>Password <Text style={styles.dot}>*</Text> </Text>
        <TextInput style={styles.input} value={password} onChangeText={(text)=>setPassword(text)} autoComplete="password" secureTextEntry={true}  placeholder="Enter your password" />
      </View>
      <View style={styles.button}>
        <Button onPress={submitFunction} color="#841584" title={loading ? "Please Wait..." : "Register"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    width : "100vw",
    maxWidth : "100%",
    marginTop : 5
  },
  pageTitle: {
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Roboto",
    width : "100%",
  },
  input : {
    borderStyle : "solid",
    borderColor : "black",
    backgroundColor : "#fff",
    borderRadius : 5,
    paddingLeft : 5,
    marginTop : 5,
    marginLeft : 20,
    marginRight : 20,
    height : 40,

  },
  name : {
    width : "100%",
    textAlign : "center",
    margin : 10,
  },
  text : {
    marginLeft : 20,
    marginRight : 20,
    fontWeight : "500",
    fontSize : 14
  },
  dot :{
    color : 'red'
  },
  button :{
    marginTop : 10,
    width : "100%",
    padding : 20
  }
});

export default Register;
