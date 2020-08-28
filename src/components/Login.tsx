import React from 'react'
//import React-native components
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native'

export default function Login() {
  const [codeInput, setCodeInput] = React.useState("");
  const [nipInput, setNipInput] = React.useState("");

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>¡Bienvenido!</Text>
        <Text style={styles.subText}>Usa tus datos de acceso SIIAU para ingresar</Text>
        <TextInput onChangeText={text => setCodeInput(text)} value={codeInput} placeholder={"código"} style={styles.codeInput}></TextInput>
        <TextInput onChangeText={text => setNipInput(text)} value={nipInput} placeholder={"NIP"} placeholderTextColor= {"white"} style={styles.nipInput}></TextInput>
        <TouchableOpacity onPress={() => Alert.alert("simple button")} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  titleContainer:{
    alignItems: "center",
  },
  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#BD4455',
    textAlign: 'center',
    marginTop: 0
  },
  subText:{
    color: "#445068",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  codeInput:{
    textAlign: "center",
    backgroundColor: "white",
    fontWeight: "bold",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#445068",
    borderWidth: 2,
    borderRadius: 50,
    width: 230
  },
  nipInput:{
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#63ACAA",
    borderColor: "#63ACAA",
    borderWidth: 1,
    borderRadius: 50,
    width: 230
  },
  loginButton:{
    marginTop: 10,
    backgroundColor: "#BD4455",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 40,
    borderColor: "#BD4455",
    borderWidth: 1,
    borderRadius: 50,
  },
  loginButtonText:{
    color: "white",
    fontWeight: "bold",
  }
});
