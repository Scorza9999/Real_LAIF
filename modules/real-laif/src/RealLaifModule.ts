// this is for our native code

import { requireNativeModule } from "expo";

const MyRandomModule = requireNativeModule("RealLaifModule");

export function getRandomBoolean(): boolean {
  return MyRandomModule.getRandomBoolean();
}

//declare class RealLaifModule extends NativeModule<{}> {}

//const MyModule: RealLaifModule = requireNativeModule("RealLaif");
export default MyRandomModule;
