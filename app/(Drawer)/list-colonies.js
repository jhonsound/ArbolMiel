import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colonie from "../../assets/colonie.png";
import { TouchableOpacity } from "react-native-gesture-handler";
const getColonies = async () => {
  const response = await AsyncStorage.getItem("colonies");
  return JSON.parse(response);
};

export default function Page() {
  const [colonies, setColonies] = useState([]);

  useEffect(() => {
    getColonies().then((data) => {
      setColonies(data);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.title}>Colonias</Text>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.containerList}>
          {colonies.length !== 0 ? (
            colonies.map((colonie, index) => (
              <>
                <TouchableOpacity>
                  <View style={styles.item}>
                    <Image
                      resizeMode="contain"
                      style={{ width: 50, height: 70 }}
                      source={Colonie}
                    />
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 60,
                      }}
                    >
                      <View style={styles.description}>
                        <Text>Colonia {index + 1}</Text>
                        <Text>Meliponario {colonie.meliponarian}</Text>
                      </View>
                      <View>
                        {colonie.latitude !== 0 ? (
                          <View>Registrado</View>
                        ) : (
                          <Text>Sin registrar</Text>
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.separator}></View>
              </>
            ))
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 30,
                marginTop: 100,
              }}
            >
              <Text style={{fontSize: 20}}>Aún no tienes colonies asignadas</Text>
              <Image
                resizeMode="contain"
                style={{ width: 150, height: 150 }}
                source={Colonie}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  containerList: {
    width: "100%",
    padding: 25,
    display: "flex",
    gap: 5,
    overflow: "scroll",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  title: { fontWeight: "400", marginTop: 20, fontWeight: '400' },
  description: { paddingLeft: 20, display: "flex", flexDirection: "column" },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    borderWidth: 0.5,
  },
});
