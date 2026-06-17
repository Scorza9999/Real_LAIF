import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

// l'immagine da passare a questo schermo
type ImageProps = {
  uri: string;
};

const UploadScreen = (props: ImageProps) => {
  const router = useRouter();

  return (
    <View>
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
    </View>
  );
};

export default UploadScreen;
