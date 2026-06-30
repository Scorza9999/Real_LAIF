import { Button, Text } from "@react-navigation/elements";
import { Href, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, Platform, View } from "react-native";
import { Random } from "../../modules/random-boolean/index";

const UploadScreen = () => {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();
  const router = useRouter();
  const path_to_file: Href = "../result/result_screen";

  const handleConfirm = async () => {
    var nativeResult: boolean; // a temporary variable
    var opcode: string; // the code that will be passed to the result screen

    // for web
    if (Platform.OS === "web") {
      nativeResult = Math.random() > 0.5;

      opcode = nativeResult ? "0" : "1";
    } else {
      // for android
      try {
        nativeResult = await Random(imageUri);

        opcode = nativeResult ? "0" : "1";
      } catch (error) {
        console.error("ERROR");
        opcode = "2";
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
    router.push({
      pathname: path_to_file,
      params: { imageUri, opcode },
    });
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
      />
      <Text>Continue?</Text>
      <Button onPress={() => handleConfirm()}>Yes</Button>
      <Button onPress={() => handleReject()}>No</Button>
    </View>
  );
};

export default UploadScreen;
