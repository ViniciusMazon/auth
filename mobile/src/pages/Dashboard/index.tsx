import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 50,
    color: '#27B4FD',
    alignSelf: 'flex-start',
    paddingHorizontal: '10%',
  },
  user: {
    fontSize: 40,
    color: '#484848',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#27B4FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome,</Text>
      <Text style={styles.user}>{user?.name}</Text>

      <RectButton style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sing out</Text>
      </RectButton>
    </View>
  );
};

export default Dashboard;
