import React from "react";
import { View } from "react-native";
import MyButton from "./MyButton";
import ImagePickerBox from "./UploadImage";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton></MyButton>
      <ImagePickerBox></ImagePickerBox>
    </View>
  );
}
