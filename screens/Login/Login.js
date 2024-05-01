import {
  Image,
  View,
  TextInput,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import background from "../../assets/background.jpg";
import footer from "../../assets/footer.png";
import qr from "../../assets/qr.png";
import Logo from "../../assets/Logo.png";
import { router } from "expo-router";
import { useState } from "react";
import axiosInstance from "../../utils/axios";
import LoginStyles from "./LoginStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
export function Login() {
  const [credentials, setCredentials] = useState({});
  const onSubmit = async () => {
    try {
      const { data } = await axiosInstance.post("auth/sign-in-mobile", {
        name: credentials.name,
        password: credentials.password,
      });
      if (data.id) {
        router.push({
          pathname: "/(Drawer)/home",
          params: { param: "usuario" },
        });
      }
      await AsyncStorage.setItem('user', JSON.stringify(data));
      const {data: colonies} = await axiosInstance.post("colonies/get-colonies-by-staff", {id: data.id, meliponarians: data.meliponarians})
      await AsyncStorage.setItem('colonies', JSON.stringify(colonies));
    } catch (error) {
      alert('Usuario o contraseña incorrectos')
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}
    style={LoginStyles.container} 
  >
    <Image resizeMode="contain" style={LoginStyles.logo} source={Logo} />
    <ImageBackground
      resizeMode="cover"
      style={LoginStyles.background} 
      source={background}
    />
    <View style={LoginStyles.formContainer}> 
      <TextInput
        onChange={(e) =>
          setCredentials({ ...credentials, name: e.nativeEvent.text })
        }
        style={LoginStyles.input} 
        placeholder="Usuario"
      ></TextInput>
      <TextInput
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.nativeEvent.text })
        }
        style={LoginStyles.input} 
        placeholder="Contraseña"
      ></TextInput>
      <TouchableOpacity onPress={() => onSubmit()}>
        <View style={LoginStyles.submitButton}> 
          <Text style={LoginStyles.submitButtonText}>Ingresar</Text>
        </View>
      </TouchableOpacity>
    </View>
    <Image
      resizeMode="stretch"
      style={LoginStyles.footer} 
      source={footer}
    />
    <Image
      resizeMode="stretch"
      style={LoginStyles.qrImage} 
      source={qr}
    />
    <Text style={LoginStyles.verifyText}>Verificar Colonia</Text>
  </KeyboardAvoidingView>
  );
}
