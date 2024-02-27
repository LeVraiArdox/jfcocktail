import { Text, View, StyleSheet } from "react-native";
export  default function Header({ name }) {

    let date = new Date();
    let time = date.getHours() + ':'+ date.getMinutes();

    return (
        <View style={styles.container}>
            <Text style={styles.textHour}>{time}</Text>
            <Text style={styles.textHeader}>Bienvenue, {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 24,
        color: "#000",
        paddingBottom: 50,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    textHour: {
        fontSize: 54,
        paddingBottom: 10,
        alignSelf: 'center',
        fontWeight: 'bold',

    }
});