import { getRandomBoolean } from "@/modules/real-laif/src/RealLaifModule";
import React, { useState } from "react";

export default function MyButton() {
  const [boolean, setBoolean] = useState(true);

  function handleClick() {
    setBoolean(getRandomBoolean());
  }

  return (
    <button onClick={handleClick}>
      Kotlin ha fornito come valore booleano: {boolean.toString()}
    </button>
  );
}
