import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useAuth} from '../../contexts/auth';

import unlock from '../../assets/icons/unlock.png';

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Image source={unlock} style={styles.image} />
      <Text style={styles.welcome}>Welcome,</Text>
      <Text style={styles.user}>{user?.name}</Text>

      <RectButton style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sing out</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    resizeMode: 'contain',
  },
  welcome: {
    fontSize: 50,
    color: '#27B4FD',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
    marginTop: -25,
  },
  user: {
    fontSize: 40,
    color: '#484848',
    alignSelf: 'flex-end',
    paddingHorizontal: '10%',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#27B4FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 45,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default Dashboard;
