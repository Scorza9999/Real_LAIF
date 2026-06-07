// this is for the web (if we want to build for the web)

import { NativeModule, registerWebModule } from "expo";

class RealLaifModule extends NativeModule<{}> {}

export default registerWebModule(RealLaifModule, "RealLaifModule");
