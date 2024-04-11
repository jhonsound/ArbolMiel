import {
  Image,
  View,
  TextInput,
  Text,
  ImageBackground,
  Touchable,
} from "react-native";
import qr from "../assets/QR2.png";
import { Link } from "expo-router";

export function Resgistration() {
  return (
    <View style={{ flex: 1 }}>
      <View className="flex flex-row items-center pt-4 gap-4">
        <Image source={qr} />
        <View className="w-[65%]">
          <TextInput
            className="bg-white text-lg w-[100%] px-3 py-3 rounded-lg shadow-black shadow-xl"
            placeholder="Codigo QR"
          ></TextInput>
        </View>
      </View>

      <View className="flex flex-row">
        <TextInput
          className="bg-white text-lg w-[100%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Codigo QR"
        ></TextInput>
      </View>

      <Text className=" z-20 text-white text-[12px] font-semibold absolute bottom-2 left-4">
        Verificar Colonia
      </Text>
    </View>
  );
}
