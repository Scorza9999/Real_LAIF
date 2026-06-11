import { NativeModule, requireNativeModule } from 'expo';

declare class RandomBooleanModule extends NativeModule<{}> {}

export default requireNativeModule<RandomBooleanModule>('RandomBoolean');
