// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { signIn } from '../firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      // Navigation will automatically redirect to Profile if user is authenticated
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}
