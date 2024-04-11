import {
  Image,
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import qr from "../assets/QR2.png";
import { Link } from "expo-router";
import SelectComponent from "../components/SelectComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Resgistration() {
  return (
    <View style={{ flex: 1 }} className="w-full h-[100vh]">
      <View className="p-4 bg-orange-500">
        <TextInput
          className="bg-white text-lg w-[100%] px-3 py-3 rounded-lg mt-4"
          placeholder="Cargar Foto Nueva Colonia"
        ></TextInput>
        <Ionicons name="add-circle-outline" size={8} color={'#F07F0E'}/>
      </View>

      <SelectComponent placeholder="Especie" />
      <SelectComponent placeholder="Parentesco" />
      <SelectComponent placeholder="Procedencia" />
      <SelectComponent placeholder="N° Alzas" />

      <View className="flex items-center mt-6">
        <Pressable onPress={() => console.log("Aaaaaaaaaaaaa")}>
          <Button
            title="Guardar Colonia"
            color="#10321C"
            accessibilityLabel="Learn more about this purple button"
          />
        </Pressable>
      </View>
    </View>
  );
}
