// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebase';

export default function ProfileScreen() {
  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <View>
      <Text>Welcome to your Profile!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
