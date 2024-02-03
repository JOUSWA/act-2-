// screens/AccountRecoveryPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AccountRecoveryPage = () => {
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleAccountRecovery = () => {
    // Validate if recovery email is entered
    if (!recoveryEmail) {
      Alert.alert('Validation Error', 'Please enter the recovery email.');
      return;
    }

    // Add your account recovery logic here
    console.log('Recovery Email:', recoveryEmail);

    // Example: You might want to send a recovery email and show a success message
    Alert.alert('Recovery Email Sent', 'Check your email for account recovery instructions.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Recovery</Text>

      {/* Input box for recovery email */}
      <TextInput
        style={styles.input}
        placeholder="Recovery Email"
        keyboardType="email-address"
        value={recoveryEmail}
        onChangeText={(text) => setRecoveryEmail(text)}
      />

      {/* Account recovery button */}
      <Button title="Recover Account" onPress={handleAccountRecovery} />

      {/* Additional information or links can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});

export default AccountRecoveryPage;
