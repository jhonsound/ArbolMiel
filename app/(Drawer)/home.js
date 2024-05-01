import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.column}>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="person" size={100} color={"#F07F0E"} />
              <Text>Tu cuenta</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.push('/(Drawer)/list-colonies')}>
            <View style={styles.item}>
              <Ionicons name="list" size={100} color={"#F07F0E"} />
              <Text>Lista de Colonias</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons name="list" size={100} color={"#F07F0E"} />
              <Text>Lista de Registros</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> router.push('/(Drawer)/scan-qr')}>
            <View style={styles.item}>
              <Ionicons name="qr-code" size={100} color={"#F07F0E"} />
              <Text>Escanear Qr</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    marginBottom: 50,
    color: "#152D1C",
    fontWeight: "bold",
    fontSize: 20,
  },
  column: {
    flexDirection: "column",
    gap: 50,
    width: "100%",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
});