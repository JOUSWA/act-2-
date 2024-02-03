// screens/RegistrationPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Validate if username, email, and password are entered
    if (!username || !email || !password) {
      Alert.alert('Validation Error', 'Please enter all registration details.');
      return;
    }

    // Add your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Example: You might want to save registration data and navigate to the home page
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration</Text>

      {/* Input boxes for username, email, and password */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true} // Use secureTextEntry for password input
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Registration button */}
      <Button title="Register" onPress={handleRegistration} />

      {/* Navigation to other pages */}
      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
      <Button title="go back to landing page" onPress={() => navigation.navigate('Landing')} />
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
  link: {
    color: 'blue',
    marginTop: 10,
  },
});

export default RegistrationPage;
