import { useRouter } from "expo-router";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import Logo from "../assets/Logo.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#dde3fe" }}
      >
        <View style={{ padding: 10 }}>
          <Image
            source={Logo}
            resizeMode="contain"
            style={{ width: 200, height: 200, alignSelf: "center" }}
          />
        </View>
        <View style={{ backgroundColor: '#fff', padding: 10}}>
          <DrawerItemList {...props} />
          <DrawerItem label={"logout"} onPress={() => router.replace("/")} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
}
