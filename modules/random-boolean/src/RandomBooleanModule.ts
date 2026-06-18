// This is for our native code
import { requireNativeModule } from "expo";

const RandomBoolean = requireNativeModule("RandomBoolean");

export async function Random(uri: String): Promise<boolean> {
  return await RandomBoolean.Random(uri);
}
