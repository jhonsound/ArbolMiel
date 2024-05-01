import { Text, View } from "react-native";
import { Redirect } from "expo-router";
import { Control } from "../../screens/colony-control";
export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Control />
    </View>
  );
}
