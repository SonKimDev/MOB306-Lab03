import { Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import styles from './styles/styles';

const App = () => {
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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.signIn}>
        <TextInput style={styles.input} placeholder='Enter email...' placeholderTextColor={'#888899'} onChangeText={text=>setEmail(text)} value={email}/>
        <TextInput style={styles.input} placeholder='Enter password...' secureTextEntry={true} placeholderTextColor={'#888899'} onChangeText={text=>setPassword(text)} value={password}/>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonContent}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App