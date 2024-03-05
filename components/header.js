import { Text, View, StyleSheet } from "react-native";
import { isConnected } from "./popup";

export default function Header({ name }) {
  var date = new Date();
  var time = date.getHours() + ":" + date.getMinutes();

  if (userName) name = userName;

  return (
    <View style={styles.container}>
      <Text style={styles.textHour}>{time}</Text>
      <Text style={styles.textHeader}>Bienvenue, {name}</Text>
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
