import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Camera } from "expo-camera";
import { router } from "expo-router";

export default function ScanQr() {
  // const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  // const [hasPermissionCamera, setHasPermissionCamera] = useState(null);
  const [camara, setCamara] = useState(Camera.useCameraPermissions());
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [location1, setLocation1] = useState(
    Location.useForegroundPermissions()
  );

  let text = "Waiting..";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
    // (async () => {
    //   const { status } = await Camera.requestCameraPermissionsAsync();

    //   setHasPermissionCamera(status === "granted");
    // })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let Data = {
      id: data.split(',')[0],
      admin: data.split(',')[1]
    }
    try {
      if(Data.id){
        alert(
          `Colonia escaneada exitosamente en ubicación: latitude:${location.coords.latitude} longitude:${location.coords.longitude}`
        ); 
        router.push({
          pathname: "/Colognes/registration-cologne",
          params: { id: Data.id, admin: Data.admin },
        });
      }else{
        alert(
          `Código qr invalido, por favor intente de nuevo`
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        `Código qr invalido, por favor intente de nuevo`
      );
    }
   
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const toggleFlash = async () => {
  //   if (hasPermissionCamera) {
  //     if (flashMode === Camera.Constants.FlashMode.off) {
  //       setFlashMode(Camera.Constants.FlashMode.torch);
  //     } else {
  //       setFlashMode(Camera.Constants.FlashMode.off);
  //     }
  //   } else {
  //     alert("No tiene permisos de la camara");
  //   }
  // };

  return (
    <>
      <View style={styles.container}>
        <View className="absolute w-[100%] pb-[30%] flex justify-center items-center h-[100%] z-10">
          <Ionicons name="scan-outline" size={380} color={"white"}></Ionicons>
        </View>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View className="flex items-center z-20 mb-[30%]">
          {scanned && (
            <Button
              title={"Toca para Escanear de nuevo"}
              onPress={() => setScanned(false)}
            />
          )}
        </View>
        <View className="absolute flex flex-row justify-around w-full bottom-24 z-30">
          <TouchableOpacity >
            <Ionicons
              name="flashlight-outline"
              size={80}
              color={"white"}
            ></Ionicons>
          </TouchableOpacity>
          <View>
            <Ionicons name="close-outline" size={80} color={"white"}></Ionicons>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
