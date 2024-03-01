import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { useState } from "react";

import Button from "./components/buttons";
import Header from "./components/header";

export default function App() {
  const defaultName = "Gauxd";
  let name = defaultName;
  let isConnected = true;
  const [showFav, setShowFav] = useState(isConnected);

  function toggleShowFav() {
    if (isConnected == true) {
      isConnected == false;
    } else {
      isConnected == true;
    }
  }

  return (
    <View style={styles.container}>
      <Header name={name} />
      <Pressable style={styles.loginButton} onPress={() => toggleShowFav()}>
        Se Connecter
      </Pressable>
      <ScrollView ContentContainerStyle={styles.butContainer}>
        {showFav ? (
          <Button theme="favourite" label="Boisson préférée" />
        ) : (
          <View />
        )}
        <Button theme="recommended" label="Boisson recommandée" />
        <Button theme="primary" label="Boisson 1" />
        <Button theme="primary" label="Boisson 2" />
        <Button theme="primary" label="Boisson 3" />
        <Button theme="primary" label="Boisson 4" />
        <Button theme="primary" label="Boisson 5" />
        <Button theme="primary" label="Boisson 6" />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  butContainer: {
    backgroundColor: "#d4d4d4",
    width: "100%",
    alignItems: "center",
    padding: 50,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  loginButton: {
    padding: 10,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
  },
});
