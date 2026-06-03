// this is for our native code

import { NativeModule, requireNativeModule } from "expo";

const MyRandomModule = requireNativeModule("MyRandomModule");

export function getRandomBoolean(): boolean {
  return MyRandomModule.getRandomBoolean();
}

declare class RealLaifModule extends NativeModule<{}> {}

const MyModule: RealLaifModule = requireNativeModule("RealLaif");
export default MyModule;
