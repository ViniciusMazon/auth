import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../service/api';

import {RectButton} from 'react-native-gesture-handler';
import user from '../../assets/icons/user.png';

const SingUp: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    if (name === '' || email === '' || password === '') {
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    await api.post('/sing-up', data);
    navigation.navigate('SignIn');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={user} style={styles.image} />
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />

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

        <RectButton style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SingIn</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5fc',
  },
  image: {
    width: '60%',
    resizeMode: 'contain',
    marginBottom: -30,
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
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#27B4FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default SingUp;
