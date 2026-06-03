import { getRandomBoolean } from "@/modules/real-laif/src/RealLaifModule";
import React, { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [boolean, setBoolean] = useState(true);

  function handleClick() {
    setBoolean(getRandomBoolean());
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleClick}>
        Kotlin ha fornito come valore booleano: {boolean.toString()}
      </button>
    </View>
  );
}
