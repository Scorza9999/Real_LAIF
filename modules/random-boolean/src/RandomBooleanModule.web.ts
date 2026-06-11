import { registerWebModule, NativeModule } from 'expo';

// RandomBooleanModule is not available on the web platform.
class RandomBooleanModule extends NativeModule<{}> {}

export default registerWebModule(RandomBooleanModule, 'RandomBooleanModule');
