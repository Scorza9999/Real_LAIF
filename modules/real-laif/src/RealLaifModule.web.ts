import { registerWebModule, NativeModule } from 'expo';

// RealLaifModule is not available on the web platform.
class RealLaifModule extends NativeModule<{}> {}

export default registerWebModule(RealLaifModule, 'RealLaifModule');
