import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomDrawerContent from "../../components/CustomDrawerContent";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: false,
          drawerActiveBackgroundColor: "#fff",
          drawerActiveTintColor: '#10321C',
          drawerLabelStyle: { marginLeft: -25 }
        }}
        >
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={'#F07F0E'}/>
            ),
          }}
        />
        <Drawer.Screen
        name="scan-qr" 
        options={{
          drawerLabel: "Escanear QR",
          title: "Escanear QR",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="qr-code" size={size} color={'#F07F0E'}></Ionicons>
            ),
          }}
        />
        <Drawer.Screen
          name="list-records" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Lista De Registros",
            title: "Lista De Registros",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list" size={size} color={'#F07F0E'}/>
            ),
          }}
        />
        <Drawer.Screen
          name="list-colonies" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Lista De Colonias",
            title: "Lista De Colonias",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list" size={size} color={'#F07F0E'}/>
            ),
          }}
        />
        <Drawer.Screen
          name="my-account" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Mi Cuenta",
            title: "Mi Cuenta",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person" size={size} color={'#F07F0E'}/>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
