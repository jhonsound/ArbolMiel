import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  Pressable,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SelectComponent from "../components/SelectComponent";
import qr from "../assets/QR2.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Control() {
  const [colonie, setColonie] = useState({});
  const params = useLocalSearchParams();
  console.log("paramss---->", params.id);
  useEffect(() => {
    if (params.id) {
      AsyncStorage.getItem("colonies").then((colonies) => {
        const arrayCol = JSON.parse(colonies);
        setColonie(arrayCol.find((item) => item.id === params.id));
      });
    }
  }, []);

  const [controlForm, setControlForm] = useState({
    state: "",
    colinieId: params.id,
    alzas: "",
    population: "",
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
    },
    rowContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#F59E0B",
    },
    qrImage: {
      width: 100,
      height: 100,
    },
    infoContainer: {
      marginLeft: 16,
    },
    infoText: {
      padding: 8,
      color: "#FFF",
      fontSize: 16,
    },
    inputContainer: {
      display: "flex",
      padding: 16,
      backgroundColor: "#F59E0B",
    },
    textInput: {
      backgroundColor: "#FFF",
      fontSize: 18,
      borderRadius: 8,
      padding: 12,
      marginTop: 16,
      borderWidth: 0.5,
    },
    addButton: {
      fontSize: 32,
      color: "#F07F0E",
    },
    buttonContainer: {
      alignItems: "center",
      height: 100,
      marginTop: 24,
    },
  });
  const handleSave = async () => {
    console.log(controlForm, "colonia");
    console.log(params);
    try {
      await axiosInstance.post(`controls/create-control}`, {
        ...registrationForm,
      });
        alert("Colonia registrada exitosamente");
        router.push("/(Drawer)/home");
      } catch (error) {
        console.log(error);
        alert("Error al registrar colonia");
      }
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={qr} style={styles.qrImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>ID Colonia: {params.id}</Text>
          <Text style={styles.infoText}>
            Meliponario: {colonie?.meliponarian}
          </Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Cargar Foto Nueva Colonia"
        />
        <Text style={styles.addButton}>+</Text>
      </View>
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <SelectComponent
          name={"species"}
          placeholder="Estado de la Colonia"
          setControlForm={setControlForm}
          controlForm={controlForm}
          type="text"
        />
        <SelectComponent
          placeholder="Poblacion Actual de la Colonia"
          setControlForm={setControlForm}
          controlForm={controlForm}
          name={"Relationship"}
          type="text"
        />
        <SelectComponent
          name={"Source"}
          placeholder="Alzas"
          setControlForm={setControlForm}
          controlForm={controlForm}
          type="text"
        />
      </View>
      <TouchableOpacity style={{ marginTop: 30 }} onPress={() => handleSave()}>
        <View
          onPress={() => handleSave()}
          style={{
            width: 200,
            height: 45,
            alignSelf: "center",
            backgroundColor: "#F07F0E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            borderRadius: 100,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Guardar Control
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
