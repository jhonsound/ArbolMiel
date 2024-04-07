import { Text, View } from "react-native";
import { Redirect } from "expo-router";
export default function Page() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Index</Text>
      <Redirect href={'(Drawer)/registration-cologne'}/>
    </View>
  )
}
