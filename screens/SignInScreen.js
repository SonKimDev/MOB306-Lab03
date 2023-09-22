import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import { SafeAreaView, } from 'react-native-safe-area-context';
import styles from '../styles/SignInStyle';
const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
      if(email.length <= 0){
        alert('Vui lòng nhập email');
        return;
      } else if(password.length <= 0){
        alert('Vui lòng nhập password');
        return;
      } else{
        alert('email: ' + email + '\npassword: ' + password);
        setEmail('');
        setPassword('');
        Keyboard.dismiss();
      }
    }

    const handleNextScreen = () => {
      const Bai34 = 'Bai34';
      navigation.navigate(Bai34);
    }
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.signIn}>
          <TextInput style={styles.input} placeholder='Enter email...' placeholderTextColor={'#888899'} onChangeText={text=>setEmail(text)} value={email}/>
          <TextInput style={styles.input} placeholder='Enter password...' secureTextEntry={true} placeholderTextColor={'#888899'} onChangeText={text=>setPassword(text)} value={password}/>
          <TouchableOpacity style={styles.buttonSubmitContainer} onPress={handleSubmit}>
            <Text style={styles.buttonSubmitContent}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBai34Contanier} onPress={handleNextScreen}>
            <Text style={styles.buttonBai34Content}>Bài 3-4</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

export default SignInScreen