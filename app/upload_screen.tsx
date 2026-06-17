import { Button, Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

// l'immagine da passare a questo schermo
type ImageProps = {
  uri: string;
};

const UploadScreen = (props: ImageProps) => {
  const router = useRouter();

  const handleConfirm = () => {};

  const handleReject = () => {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: props.uri }}
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
      <Button onPress={() => handleReject}>No</Button>
    </View>
  );
};

export default UploadScreen;
