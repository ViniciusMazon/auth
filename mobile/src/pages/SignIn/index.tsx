import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const {signed, signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(signed);

  function handleSignIn() {
    signIn(email, password);
  }

  function handleNavigateToSingUp() {
    navigation.navigate('SingUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        textContentType={'password'}
        secureTextEntry={true}
      />

      <Text style={styles.link} onPress={handleNavigateToSingUp}>
        Don't have an account? Sing up
      </Text>

      <RectButton style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>SingIn</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5fc',
  },
  label: {
    color: '#484848',
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#666666',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
    padding: 9,
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#08a8f8',
    marginVertical: 10,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#27B4FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default SignIn;
