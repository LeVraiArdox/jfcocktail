import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, theme }) {
  const requestToNode = async (label) => {
    try {
      const response = await fetch("http://localhost:1880/endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: label }),
      });
      if (response.ok) {
        alert("Succès!");
      } else {
        alert("Une erreur est survenue!");
      }
    } catch (error) {
      alert(`Une erreur est survenue: ${error}`);
    }
  };

  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 2,
            borderColor: "#4287f5",
            borderRadius: 15,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => requestToNode(label)}
        >
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  if (theme === "favourite") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 2,
            borderColor: "#e69509",
            borderRadius: 15,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => requestToNode(label)}
        >
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 88,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    marginTop: 20,
    shadowOpacity: 0.2,
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
