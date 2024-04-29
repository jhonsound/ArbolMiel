import {
  Image,
  View,
  TextInput,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import background from "../assets/background.jpg";
import footer from "../assets/footer.png";
import qr from "../assets/qr.png";
import Logo from "../assets/Logo.png";
import { router } from "expo-router";
import { useState } from "react";
export function Login() {
  const [credentials, setCredentials] = useState({});
  const onSubmit = () => {
    if (credentials.name === "usuario" && credentials.password === "usuario"){
      router.push({pathname: "/(Drawer)/home", params: {param: "usuario"} })
    }else{
      alert("Usuario incorrecto")
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200}
      style={{ flex: 1, alignItems: "center" }}
    >
      <Image resizeMode="contain" className="w-[200px]" source={Logo} />
      <ImageBackground
        resizeMode="cover"
        className="opacity-30 absolute w-full h-[100%]"
        source={background}
      />
      <View className="flex flex-col h-[100%] w-[100%] gap-5 items-center">
        <TextInput
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.nativeEvent.text })
          }
          className="bg-white text-lg w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Usuario"
        ></TextInput>
        <TextInput
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.nativeEvent.text })
          }
          className="bg-white text-lg mb-10 w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Contraseña"
        ></TextInput>
          <TouchableOpacity onPress={() => onSubmit()}>
            <View className="bg-black rounded-md px-10 py-2">
              <Text className="text-white text-xl">Ingresar</Text>
            </View>
          </TouchableOpacity>
      </View>
      <Image
        resizeMode="stretch"
        className="z-10 absolute bottom-0 w-[100%] h-[20%]"
        source={footer}
      />
      <Image
        resizeMode="stretch"
        className="z-10 absolute left-6 bottom-5 w-[20%] h-[10%]"
        source={qr}
      />
      <Text className=" z-20 text-white text-[12px] font-semibold absolute bottom-2 left-4">
        Verificar Colonia
      </Text>
    </KeyboardAvoidingView>
  );
}
