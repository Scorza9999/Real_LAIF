import { getRandomBoolean } from "@/modules/real-laif/src/RealLaifModule";
import { Text } from "@react-navigation/elements";
import React, { useState } from "react";
import { Pressable } from "react-native";

function MyButton() {
  const [boolean, setBoolean] = useState(true);
  var message: String = "";

  if (boolean) {
    message = "True";
  } else {
    message = "False";
  }

  function handleClick() {
    setBoolean(getRandomBoolean());
  }

  return (
    <Pressable onPress={handleClick}>
      <Text>{message}</Text>
    </Pressable>
  );
}

export default MyButton;
