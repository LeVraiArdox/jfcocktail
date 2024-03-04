import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Button from "./components/buttons";
import Header from "./components/header";
import LoginModal from "./components/popup";

export default function App() {
  const defaultName = "Gauxd";
  let name = defaultName;
  const [isConnected, setIsConnected] = useState(true);
  const [showFav, setShowFav] = useState(isConnected);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onLogin = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  function toggleShowFav() {
    setIsConnected(!isConnected);
    setShowFav(!showFav);
  }

  return (
    <View style={styles.container}>
      <Header name={name} />
      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <MaterialIcons name="login" size={38} color="#000" />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.butContainer}>
        {showFav && <Button theme="favourite" label="Boisson préférée" />}
        <Button theme="recommended" label="Boisson recommandée" />
        <Button theme="primary" label="Sunrise Splash" />
        <Button theme="primary" label="Tropical Breeze" />
        <Button theme="primary" label="Apple Pine Delight" />
        <Button theme="primary" label="Cranberry Sunset" />
        <Button theme="primary" label="Island Orchard" />
        <Button theme="primary" label="Tropical Cran-apple" />
      </ScrollView>
      <LoginModal
        isVisible={isModalVisible}
        onClose={onModalClose}
      />
      <StatusBar style="hidden" translucent />
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
    backgroundColor: "#ddddd",
    width: "110%",
    alignItems: "center",
    paddingHorizontal: 15,
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
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
});