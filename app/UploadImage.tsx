import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, View } from "react-native";

const ImagePickerBox = () => {
  // TODO: WORK IN PROGRESS
  // https://docs.expo.dev/versions/latest/sdk/imagepicker/
  // TODO: MUST MOVE THIS TO ITS OWN COMPONENT

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // controlla se ha il permesso
    if (!permission.granted) {
      Alert.alert("Permission required", "Permission required");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      exif: true,
      base64: false,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button onPress={pickImage} title="Give me the picture" />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 300, resizeMode: "contain" }}
        />
      )}
    </View>
  );
};

export default ImagePickerBox;
