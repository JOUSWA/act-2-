import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Validation Error', 'Please enter both username and password.');
      return;
    }

    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      {/* Input boxes for username and password */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true} // Use secureTextEntry for password input
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Login button */}
      <Button title="Login" onPress={handleLogin} />

      {/* Navigation to other pages */}
      <Text style={styles.link} onPress={() => navigation.navigate('Recovery')}>
        Forgot Password?
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Registration')}>
        Create an Account
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

export default LoginPage;
