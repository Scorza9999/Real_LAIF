import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

const imagePickerBox = () => {
  // TODO: WORK IN PROGRESS
  // https://docs.expo.dev/versions/latest/sdk/imagepicker/
  // TODO: MUST MOVE THIS TO ITS OWN COMPONENT

  const [image, setImage] = useState<string | null>(null);

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
};
