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
import { useIsFocused } from "@react-navigation/native";

export default function ScanQr() {
  const isFocused = useIsFocused();
  const [camara, setCamara] = useState(Camera.useCameraPermissions());
  const [hasPermission, setHasPermission] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [location1, setLocation1] = useState(
    Location.useForegroundPermissions()
  );
  const [togglePermission, setTogglePermission] = useState(true);
  let text = "Waiting..";

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };
  useEffect(() => {

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
  }, [isFocused]);
 useEffect(() => {
   if(!isFocused){
    setHasPermission(null)
    setScanned(false)
   }
   console.log(hasPermission)
 }, [isFocused])
 
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    let Data = {
      id: data.split(",")[0],
      admin: data.split(",")[1],
    };
    try {
      if (Data.id) {
        alert(
          `Colonia escaneada exitosamente en ubicación: latitude:${location.coords.latitude} longitude:${location.coords.longitude}`
        );
        router.push({
          pathname: "/Colognes/registration-cologne",
          params: { id: Data.id, admin: Data.admin },
        });
      } else {
        alert(`Código qr invalido, por favor intente de nuevo`);
      }
    } catch (error) {
      console.log(error);
      alert(`Código qr invalido, por favor intente de nuevo`);
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
        <View style={styles.absoluteCenter}>
          <Ionicons name="scan-outline" size={380} color="white" />
        </View>

        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        <View style={styles.bottomButton}>
          {scanned && (
            <Button
              title="Toca para Escanear de nuevo"
              onPress={() => setScanned(false)}
            />
          )}
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity
            onPress={() => setTogglePermission(!togglePermission)}
          >
            <Ionicons name="flashlight-outline" size={80} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close-outline" size={80} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteCenter: {
    width: "100%",
    paddingBottom: "30%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    marginTop: 120,
  },
  bottomButton: {
    flex: 1,
    alignItems: "center",
    zIndex: 20,
    marginBottom: "30%",
  },
  bottomBar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    bottom: 30,
    zIndex: 30,
    marginBottom: 30,
  },
});
