/* import { Text, View } from "react-native"; */
import { Redirect } from "expo-router";
import { Login } from "../screens/Login";
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function Page() {
  return <Login />;
}
