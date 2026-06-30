import { Text } from "@react-navigation/elements";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const result_screen = () => {
  // the image uri and the operation to be performed
  const { imageUri, param_opcode } = useLocalSearchParams<{
    imageUri: string;
    param_opcode: string;
  }>();
  const router = useRouter();
  const opcode = Number(param_opcode);

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
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        explicabo, aliquid minima consequatur ipsa nulla quo voluptas non magnam
        error quia incidunt nihil expedita nisi vel temporibus cupiditate
        voluptate quibusdam!
      </Text>
    </View>
  );
};

export default result_screen;
