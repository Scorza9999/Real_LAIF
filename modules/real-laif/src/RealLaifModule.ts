// this is for our native code

import { NativeModule, requireNativeModule } from "expo";

// 1. Define the interface for your native functions
interface RealLaifModuleInterface extends NativeModule {
  getRandomBoolean: () => boolean;
}

const MyRandomModule =
  requireNativeModule<RealLaifModuleInterface>("RealLaifModule");

export function getRandomBoolean(): boolean {
  return MyRandomModule.getRandomBoolean();
}

//declare class RealLaifModule extends NativeModule<{}> {}

//const MyModule: RealLaifModule = requireNativeModule("RealLaif");
export default MyRandomModule;
