import {
  Image,
  View,
  TextInput,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import background from "../assets/background.jpg";
import footer from "../assets/footer.png";
import qr from "../assets/qr.png";
import Logo from "../assets/Logo.png";
import { Link } from "expo-router";

export function Login() {
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
          className="bg-white text-lg w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Usuario"
        ></TextInput>
        <TextInput
        
          className="bg-white text-lg mb-10 w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Contraseña"
        ></TextInput>
        <Link href="/(Drawer)/scan-qr">
          <View className="bg-black rounded-md px-10 py-2">
            <Text className="text-white text-xl">Ingresar</Text>
          </View>
        </Link>
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

import {
  Image,
  View,
  TextInput,
  Text,
  ImageBackground,
  Touchable,
} from "react-native";
import background from "../assets/background.jpg";
import footer from "../assets/footer.png";
import qr from "../assets/qr.png";
import Logo from "../assets/Logo.png";
import { Link } from "expo-router";

export function Login() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image resizeMode="contain" className="w-[200px]" source={Logo} />
      <ImageBackground
        resizeMode="cover"
        className="opacity-30 absolute w-full h-[100%]"
        source={background}
      />
      <View className="flex flex-col h-[100%] w-[100%] gap-5 items-center">
        <TextInput
          className="bg-white text-lg w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Usuario"
        ></TextInput>
        <TextInput
          className="bg-white text-lg mb-10 w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Contraseña"
        ></TextInput>
        <Link href="/(Drawer)/registration-cologne">
          <View className="bg-black rounded-md px-10 py-2">
            <Text className="text-white text-xl">Ingresar</Text>
          </View>
        </Link>
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
    </View>
  );
}
