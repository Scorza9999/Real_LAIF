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

  //ERROR  [Invariant Violation: View config getter callback for component `button` must be a function (received `undefined`). Make sure to start component names with a capital letter.]
  return (
    <Pressable onPress={handleClick}>
      <Text>{message}</Text>
    </Pressable>
  );
}

export default MyButton;
