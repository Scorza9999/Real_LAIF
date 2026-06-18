import { Button, Text } from "@react-navigation/elements";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Platform, View } from "react-native";
import { Random } from "../../modules/random-boolean/index";

const UploadScreen = () => {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();
  const router = useRouter();

  // this might change in the future, maybe we will return an opcode instead
  var nativeResult: boolean; // for now, not used

  const handleConfirm = async () => {
    // for web
    if (Platform.OS === "web") {
      nativeResult = Math.random() > 0.5;
    } else {
      // for android
      try {
        nativeResult = await Random(imageUri);
      } catch (error) {
        console.error("ERROR");
      }
    }
    /*
     * This part here will:
     * [ ] add a spinner to show that the program is loading
     * [X] send the image to kotlin
     * [X] receive kotlin's response
     * [ ] send the response to a different page to show the final result
     */
    console.log("Yes pressed");
  };

  const handleReject = () => {
    console.log("No pressed");
    // goes back to previous screen
    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: imageUri }}
        style={{
          height: 500,
          width: 300,
          resizeMode: "contain",
          borderColor: "black",
          borderWidth: 4,
        }}
      ></Image>
      <Text>Continue?</Text>
      <Button onPress={() => handleConfirm()}>Yes</Button>
      <Button onPress={() => handleReject()}>No</Button>
    </View>
  );
};

export default UploadScreen;
