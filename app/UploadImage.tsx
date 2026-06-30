import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { Alert, Button, View } from "react-native";

const ImagePickerBox = () => {
  // https://docs.expo.dev/versions/latest/sdk/imagepicker/

  // for routing to the upload screen
  const router = useRouter();
  // allows the user to pick an image from the gallery
  // this image will be analized by kotlin
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
      const imageUri = result.assets[0].uri;

      // check if this implementation is fast enough
      router.push({
        pathname: "/upload_screen/upload_screen",
        // we pass the URI directly
        params: { imageUri: imageUri },
      });
    }
  };

  return (
    <View>
      <Button onPress={pickImage} title="Give me the picture" />
    </View>
  );
};

export default ImagePickerBox;
