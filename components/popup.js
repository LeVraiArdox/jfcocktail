import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
export default function LoginModal({ isVisible, onClose }) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#000" size={22} />
          </Pressable>
        </View>
        <View style={styles.pickerContainer}>
          <TextInput
            style={styles.userCodeInput}
            value={userName}
            onChangeText={setUserName}
            placeholder="Entrez votre nom d'utilisateur"
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.userCodeInput}
            value={userPass}
            onChangeText={setUserPass}
            placeholder="Entrez votre mot de passe"
            keyboardType="number-pad"
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "13%",
    width: "100%",
    backgroundColor: "#c9c9c9",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#000",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  userCodeInput: {
    height: 40,
    width: "90%",
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
});
