import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, View } from "react-native";

const ImagePickerBox = () => {
  // https://docs.expo.dev/versions/latest/sdk/imagepicker/
  const [image, setImage] = useState<string | null>(null);

  // for routing to the upload screen
  const router = useRouter();
  // allows the user to pick an image from the gallery
  // in the future this image will be analized
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    // checks for system permission
    if (!permission.granted) {
      Alert.alert("Permission required", "Permission required");
      return;
    }

    // allows the user to pick an image. The app keeps the metadata and the uri
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1, //doesn't compress image (otherwise the noise to analyze can be lost)
      exif: false, //otherwise it creates a json object that slows the app down
      base64: false,
    });

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
          style={{
            width: 300,
            height: 500,
            resizeMode: "contain",
            borderColor: "black",
            borderWidth: 1,
          }}
        />
      )}
    </View>
  );
};

export default ImagePickerBox;
