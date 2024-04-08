import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feed from "../Components/Home";
import InfoScreen from "../Components/Info";
import { NativeWindStyleSheet } from "nativewind";
import List from "../Components/List";
NativeWindStyleSheet.setOutput({
    default: "native",
  });
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator

    className="flex pb-10"
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
        
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Registrar Colonia",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="beehive-outline" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      /> */}
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: "Control Colonial",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-comfy" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: "Lista de Registros",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
        </Tab.Group>
    </Tab.Navigator>
  );
}
export default function HomeScreen() {
  return (
    <View className="h-full pb-2">
      <TouchableOpacity>
        <Text
          onPress={() => Alert.alert("hola")}
          className="bg-white p-3 rounded-md text-black"
        >
          ¡Arbol & Miel!
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <MyTabs/>
    </View>
  );
}

