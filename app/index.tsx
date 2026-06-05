import React from "react";
import { View } from "react-native";
import MyButton from "./MyButton";

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
    </View>
  );
}
