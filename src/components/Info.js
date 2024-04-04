import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InfoScreen() {
    return (
        <View style={styles.container}>
          <TouchableOpacity>
            <Text
              onPress={() => Alert.alert("hola")}
              className="bg-white p-3 rounded-md text-black"
            >
              ¡Arbol & Miel!
            </Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
    },
  });
  