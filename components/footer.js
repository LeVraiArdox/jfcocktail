import { Text, View, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import LoginModal from "./popup";

export default function Footer() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onLogin = () => setIsModalVisible(true);
  const onModalClose = () => setIsModalVisible(false);


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Pressable style={styles.loginButton} onPress={onLogin}>
            <MaterialIcons name="login" size={38} color="#000" />
          </Pressable>
        </View>
      </View>
      <LoginModal isVisible={isModalVisible} onClose={onModalClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    maxHeight: 70,
    backgroundColor: "#cccccf",
  },
  textHeader: {
    fontSize: 24,
    color: "#000",
    alignSelf: "center",
    fontWeight: "bold",
  },
  textHour: {
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "bold",
  },
  circle: {
    minHeight: 70,
    minWidth: 70,
    borderRadius: 60,
    backgroundColor: "#ffffff",
    alignSelf: "center",
  },
  loginButton: {
    padding: 13,
  },
});
