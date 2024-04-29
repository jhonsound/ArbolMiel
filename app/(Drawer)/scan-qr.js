import { View } from "react-native";
import ScanQr from "../../screens/scann/scan-cologne-qr";

export default function Page() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScanQr/>
    </View>
  )
}
