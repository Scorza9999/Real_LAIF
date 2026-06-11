import { Random } from "@/modules/random-boolean";
import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { Platform, Pressable } from "react-native";

function MyButton() {
  const [bool, setBool] = useState(true);
  var message: String = "";
  const os: string = Platform.OS;

  if (bool) {
    message = "True";
  } else {
    message = "False";
  }

  function randomWeb(): boolean {
    return Math.random() > 0.5;
  }

  async function handleClick() {
    if (os === "web") {
      setBool(randomWeb());
    } else {
      try {
        const nativeResult = await Random();
        setBool(nativeResult);
        console.log("Fatto");
      } catch (error) {
        console.error("ERRORE NEL CARICAMENTO");
      }
    }
  }

  return (
    <Pressable onPress={handleClick}>
      <Text>{message}</Text>
    </Pressable>
  );
}

export default MyButton;
