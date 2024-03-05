import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState, useEffect } from "react";
import usersData from "../users.json";

export default function LoginModal({ isVisible, onClose }) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [users, setUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetch(usersData);
      const jsonData = await fetchedData.json();
      setUsers(jsonData);
    };
  
    fetchData();
  }, []);

  const checkCredentials = () => {
    const users = usersData;
    const user = users.find(
      (u) => u.username === userName && u.password === userPass
    );
    console.log("user: ", user);
    console.log("username: ", userName);
    console.log("passwd: ", userPass);

    if (user !== undefined) {
      alert("User found");
      setIsConnected(true);
    } else {
      alert("User not found");
      setIsConnected(false);
    }
  };


  return isConnected, (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
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
            placeholder="Enter your username"
            onSubmitEditing={checkCredentials}
          />
          <TextInput
            style={styles.userCodeInput}
            value={userPass}
            onChangeText={setUserPass}
            placeholder="Enter your password"
            secureTextEntry={true}
            onSubmitEditing={checkCredentials}
          />
        </View>
        <Pressable style={styles.loginButton} onPress={checkCredentials}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#e2e2e2",
    padding: 16,
    borderRadius: 8,
    width: "90%",
    height: "50%",
    alignSelf: "center",
    justifyContent: "space-between",
    top: 0,
    zIndex: 999,
    marginTop: 150,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pickerContainer: {
    width: "100%",
    marginTop: 24,
  },
  userCodeInput: {
    width: "100%",
    height: 48,
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  loginButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#2E71F4",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
