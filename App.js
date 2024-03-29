import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { useState, useContext } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import LoginModal from "./components/popup";
import { UserProvider } from "./components/userContext";
import Button from "./components/buttons";
import Header from "./components/header";
import UserContext from "./components/userContext";
import Footer from "./components/footer";

export default function App() {
  const defaultName = "client inconnu";
  const isConnected = "true";

  console.log("connected ?", isConnected);

  return (
    <UserProvider>
      <View style={styles.container}>
        <Header name={defaultName} />
        <ScrollView contentContainerStyle={styles.butContainer}>
          {isConnected && <Button theme="favourite" label="Boisson préférée" />}
          <Button theme="recommended" label="Boisson recommandée" />
          <Button theme="primary" label="Sunrise Splash" />
          <Button theme="primary" label="Tropical Breeze" />
          <Button theme="primary" label="Apple Pine Delight" />
          <Button theme="primary" label="Cranberry Sunset" />
          <Button theme="primary" label="Island Orchard" />
          <Button theme="primary" label="Tropical Cran-apple" />
        </ScrollView>
        <Footer />
        <StatusBar style="hidden" translucent />
      </View>
    </UserProvider>
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
    width: "100%",
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
