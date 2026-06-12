import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import MyButton from "./MyButton";

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  // TODO: WORK IN PROGRESS
  // https://docs.expo.dev/versions/latest/sdk/imagepicker/
  // TODO: MUST MOVE THIS TO ITS OWN COMPONENT
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // controlla se ha il permesso
    if (!permission.granted) {
      Alert.alert("Permission required", "Permission required");
      return null;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      exif: true,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton></MyButton>
    </View>
  );
}
