import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { Platform, Pressable } from "react-native";
import { Random } from "../modules/random-boolean/index";

function MyButton() {
  const [bool, setBool] = useState(true);
  var message: String = "";
  const os: string = Platform.OS;

  // changes the message based on bool's value
  if (bool) {
    message = "True";
  } else {
    message = "False";
  }

  // for the web
  // TODO: use the RandomBooleanModule.web.ts instead
  function randomWeb(): boolean {
    return Math.random() > 0.5;
  }

  // if on the web, just performs a math.random (for testing purposes)
  async function handleClick() {
    if (os === "web") {
      setBool(randomWeb());
    } else {
      // this means it's on android

      try {
        const nativeResult = await Random();
        setBool(nativeResult);
      } catch (error) {
        // this should be handled in the UI
        console.error("ERRORE");
      }
    }
  }

  // shows the message
  return (
    <Pressable onPress={handleClick}>
      <Text>{message}</Text>
    </Pressable>
  );
}

export default MyButton;
