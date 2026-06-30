import { Button, Text } from "@react-navigation/elements";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const result_screen = () => {
  // the image uri and the operation to be performed
  const { imageUri, opcode } = useLocalSearchParams<{
    imageUri: string;
    opcode: string;
  }>();
  const router = useRouter();

  const setMessage = (opcode: string) => {
    switch (opcode) {
      case "0":
        return "this is ai";
      case "1":
        return "this is NOT ai";
      case "2":
        return "Error: could not verify";
      default:
        return "Error: unknown code";
    }
  };

  // changes the message based on the opcode
  const message: string = setMessage(opcode);

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
      <Text>{message}</Text>
      <Button onPress={() => router.replace("/")}>Go back</Button>
    </View>
  );
};

export default result_screen;
