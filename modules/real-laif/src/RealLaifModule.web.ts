// this is for the web (if we want to build for the web)

import { NativeModule, registerWebModule } from "expo";

interface BooleanOracle extends NativeModule {
  RandomCall: () => boolean;
}

class RealLaifModule extends NativeModule<{}> {}

export default registerWebModule(RealLaifModule, "RealLaifModule");
