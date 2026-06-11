// This is for our native code
import { requireNativeModule } from "expo";

const RandomBoolean = requireNativeModule("RandomBoolean");

export async function Random(): Promise<boolean> {
  return await RandomBoolean.Random();
}
