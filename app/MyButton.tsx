import { getRandomBoolean } from "@/modules/real-laif/src/RealLaifModule";
import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { Platform, Pressable } from "react-native";

function MyButton() {
  const [boolean, setBoolean] = useState(true);
  var message: String = "";
  const os: string = Platform.OS;

  if (boolean) {
    message = "True";
  } else {
    message = "False";
  }

  function handleClick() {
    if (os === "android") {
      setBoolean(getRandomBoolean());
    } else {
      //const random:
    }
  }

  return (
    <Pressable onPress={handleClick}>
      <Text>{message}</Text>
    </Pressable>
  );
}

export default MyButton;
