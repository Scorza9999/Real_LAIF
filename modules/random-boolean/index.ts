import { requireNativeModule } from "expo";

const RandomBooleanModule = requireNativeModule("RandomBooleanModule");

export async function Random(): Promise<boolean> {
  return await RandomBooleanModule.Random();
}
