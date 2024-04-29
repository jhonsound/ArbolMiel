import { Text, View } from "react-native";
import { Redirect } from "expo-router";
import { Resgistration } from "../../screens/Registration-cologne";
export default function Page() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Resgistration/>
    </View>
  )
}
