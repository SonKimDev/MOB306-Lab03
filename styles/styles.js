import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#444654',
    },
    title:{
      textAlign: 'center',
      marginTop: 100,
      color: '#ffffff',
      fontSize: 50,
      fontWeight: 'bold',
    },
    signIn:{
      flex: 1,
      marginTop: 50,
      backgroundColor: '#343541',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
      elevation: 10,
    },
    input:{
      color: '#ffffff',
      backgroundColor: '#444654',
      marginVertical: 10,
      borderRadius: 10,
      paddingHorizontal: 12,
      elevation: 10,
    },
    buttonContainer:{
      height: 45,
      marginTop: 10,
      backgroundColor: '#19c37d',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      elevation: 10,
    },
    buttonContent:{
      color: '#ffffff',
      fontSize: 20,
    },
})

export default Styles;