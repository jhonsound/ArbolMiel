import { Image, View, TextInput, Text, ImageBackgroundComponent, ImageBackground  } from "react-native";
import { StyleSheet } from "react-native-web";
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});
export function Login({ navigation }) {
  const styles = StyleSheet.create({
    logo: {},
  });
  return (
    <View style={{ flex: 1, alignItems: "center" }}>

      <Image
        resizeMode="contain"
        className="z-10 w-[80%] h-[40%]"
        style={styles.logo}
        source={require("../assets/Logo.png")}
      />
      <ImageBackground resizeMode="cover" className="z-1 opacity-20 absolute w-full h-[100%]" source={require("../assets/background.jpg")} />
      <View className="flex flex-col h-[100%] w-[100%] gap-5 items-center">
        <TextInput
          className="bg-white text-lg w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Usuario"
        ></TextInput>
        <TextInput
          className="bg-white text-lg mb-10 w-[85%] px-3 py-3 rounded-lg shadow-black shadow-xl"
          placeholder="Contraseña"
        ></TextInput>
        <View
          className="bg-black rounded-md px-10 py-1"
          title="Ingresar"
          color={"#000"}
          onTouchEnd={() => navigation.navigate("Home")}
        ><Text className="text-white text-xl">Ingresar</Text></View>
      </View>
      <Image
        resizeMode="stretch"
        className="z-10 absolute bottom-0 w-[100%] h-[20%]"
        source={require("../assets/footer.png")}
      />
      <Image
        resizeMode="stretch"
        className="z-10 absolute left-6 bottom-5 w-[20%] h-[10%]"
        source={require("../assets/qr.png")}
      />
      <Text className=" z-20 text-white text-[12px] font-semibold absolute bottom-2 left-4">Verificar Colonia</Text>
    </View>
  );
}
