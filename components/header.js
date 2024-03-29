import { Text, View, StyleSheet } from "react-native";
import UserContext from "./userContext";
import { useContext } from "react";

export default function Header({ name }) {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes();
  const {userName, isConnected} = useContext(UserContext);

  if (userName) name = userName;

  return (
    <View style={styles.container}>
      <Text style={styles.textHour}>{time}</Text>
      <Text style={styles.textHeader}>{isConnected ? "Bienvenue, " + name : "Déconnecté"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  textHeader: {
    fontSize: 24,
    color: "#000",
    alignSelf: "center",
    fontWeight: "bold",

  },
  textHour: {
    fontSize: 54,
    paddingBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

