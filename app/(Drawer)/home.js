import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Text className="-translate-y-20 text-[#152D1C] font-bold text-xl">Bienvenido</Text>
      <View className="flex w-full flex-col gap-10">
        <View className="flex flex-row justify-around">
          <TouchableOpacity>
            <View className="flex gap-3 justify-center items-center">
              <Ionicons name="person" size={100} color={"#F07F0E"} />
              <Text>Tu cuenta</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex gap-3 justify-center items-center">
              <Ionicons name="list" size={100} color={"#F07F0E"} />
              <Text>Lista de Colonias</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
        <TouchableOpacity>
          <View className="flex gap-3 justify-center items-center">
            <Ionicons name="list" size={100} color={"#F07F0E"} />
            <Text>Lista de Registros</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> router.push('/(Drawer)/scan-qr')}>
          {/* <Link href="/(Drawer)/scan-qr"> */}
          <View className="flex gap-3 justify-center items-center">
            <Ionicons name="qr-code" size={100} color={"#F07F0E"} />
            <Text>Escanear Qr</Text>
          </View>
          {/* </Link> */}
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
