import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Pressable, Alert } from "react-native";
import SelectComponent from "../components/SelectComponent";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Resgistration() {
  const [registrationForm, setRegistrationForm] = useState({
    species: "s",
    Relationship: "d",
    Source: "d",
    Raises: "f",
  });
  let user = 'userr'

  /*   useEffect(() => {
    Alert.alert("Aaaaaaaaaaaaa");
  }, []); */

  const aletr = () => {
    alert(`Aaaaaaaaaaaaa ${registrationForm.Raises}`);
  };
  return (
    <View style={{ flex: 1 }} className="w-full h-[100vh]">
      <View className="p-4 bg-orange-500">
        <TextInput
          className="bg-white text-lg w-[100%] px-3 py-3 rounded-lg mt-4"
          placeholder="Cargar Foto Nueva Colonia"
        ></TextInput>
        <Ionicons name="add-circle-outline" size={8} color={"#F07F0E"} />
      </View>

      <SelectComponent
        name={"species"}
        placeholder="Especie"
        setRegistrationForm={setRegistrationForm}
        registrationForm={registrationForm}
      />
      <SelectComponent
        placeholder="Parentesco"
        setRegistrationForm={setRegistrationForm}
        registrationForm={registrationForm}
        name={"Relationship"}
      />
      <SelectComponent
        name={"Source"}
        placeholder="Procedencia"
        setRegistrationForm={setRegistrationForm}
        registrationForm={registrationForm}
      />
      <SelectComponent
        name={"Raises"}
        placeholder="N° Alzas"
        setRegistrationForm={setRegistrationForm}
        registrationForm={registrationForm}
      />

      <View className="flex items-center mt-6">
        <Pressable onPress={() => aletr()}>
          <Button
            onPress={() => aletr()}
            title="Guardar Colonia"
            color="#10321C"
            accessibilityLabel="Learn more about this purple button"
          />
        </Pressable>
      </View>
    </View>
  );
}
