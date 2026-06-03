// this is for the web (if we want to build for the web)

import { NativeModule, registerWebModule } from "expo";

// RealLaifModule is not available on the web platform.
class RealLaifModule extends NativeModule<{}> {}

export default registerWebModule(RealLaifModule, "RealLaifModule");
