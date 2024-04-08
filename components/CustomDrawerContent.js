import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Logo from "../assets/Logo.png";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props) {
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#E8EFF5", flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#fff" }}
      >

        <View style={{ paddingTop: 10 }}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={{ width: 200, height: 200, alignSelf: "center" }}
          />
        </View>

        <View style={{ backgroundColor: "#E8EFF5", padding: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: "#10321C",
          borderTopWidth: 1,
          padding: 0,
          backgroundColor: "#E8EFF5",
        }}
      >
        <DrawerItem
          label={"logout"}
          onPress={() => router.replace("/")}
          labelStyle={{ marginLeft: -20 }}
          icon={({ size }) => (
            <Ionicons name="exit-outline" size={size} color={"#F07F0E"} />
          )}
        />
      </View>
    </View>
  );
}
