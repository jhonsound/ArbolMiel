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
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../utils/axios";

export function Resgistration() {
  const [colonie, setColonie] = useState({});
  const params = useLocalSearchParams();
  const router = useRouter();
  console.log("paramss---->", params.id);
  useEffect(() => {
    if (params.id) {
      AsyncStorage.getItem("colonies").then((colonies) => {
        const arrayCol = JSON.parse(colonies);
        setColonie(arrayCol.find((item) => item.id === params.id));
      });
    }
  }, []);

  const [registrationForm, setRegistrationForm] = useState({
    specie: "",
    relationship: "",
    source: "",
    alzas: "",
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
    console.log(registrationForm, "colonia");
    console.log(params);
    try {
      await axiosInstance.post(`colonies/registry-colonie/${colonie.id}`, {
        ...registrationForm,
        latitude: params.latitude,
        longitude: params.longitude,
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
          name={"specie"}
          placeholder="Especie"
          setRegistrationForm={setRegistrationForm}
          registrationForm={registrationForm}
          type="text"
        />
        <SelectComponent
          placeholder="Parentesco"
          setRegistrationForm={setRegistrationForm}
          registrationForm={registrationForm}
          name={"relationship"}
          type="text"
        />
        <SelectComponent
          name={"source"}
          placeholder="Procedencia"
          setRegistrationForm={setRegistrationForm}
          registrationForm={registrationForm}
          type="text"
        />
        <SelectComponent
          name={"alzas"}
          placeholder="N° Alzas"
          setRegistrationForm={setRegistrationForm}
          registrationForm={registrationForm}
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
            Guardar Colonia
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
