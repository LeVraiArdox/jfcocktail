import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import Button from './components/buttons';
import Header from './components/header';

export default function App() {
  const defaultName = 'personne inconnue';
  let name = defaultName;

  return (
    <View style={styles.container}>
      <Header name={name} />
      <Button theme='favourite' label="Boisson préférée" />
      <Button theme='primary' label="Boisson 1" />
      <Button theme='primary' label="Boisson 2" />
      <Button theme='primary' label="Boisson 3" />
      <Button theme='primary' label="Boisson 4" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
