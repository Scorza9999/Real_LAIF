// this is for the web (if we want to build for the web)

import { NativeModule, registerWebModule } from "expo";

class RandomBooleanModuleWeb extends NativeModule {
  static RandomBoolean(): boolean {
    // gets a random number, then returns whether it's greater or not than 0.5
    return Math.random() > 0.5;
  }
}

const RandomModuleWeb = registerWebModule(
  RandomBooleanModuleWeb,
  "RandomModuleWeb",
);
export default RandomModuleWeb;
