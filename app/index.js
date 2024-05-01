/* import { Text, View } from "react-native"; */
import { Login } from "../screens/Login/Login";
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function Page() {
  return <Login />;
}
