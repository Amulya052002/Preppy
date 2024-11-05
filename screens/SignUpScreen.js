// screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Profile');
    } catch (error) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}
