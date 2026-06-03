import { NativeModule, requireNativeModule } from 'expo';

declare class RealLaifModule extends NativeModule<{}> {}

export default requireNativeModule<RealLaifModule>('RealLaif');
