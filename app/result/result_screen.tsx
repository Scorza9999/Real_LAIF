import { useLocalSearchParams, useRouter } from "expo-router";

const result_screen = () => {
  // the image uri and the operation to be performed
  const { imageUri, param_opcode } = useLocalSearchParams<{
    imageUri: string;
    param_opcode: string;
  }>();
  const router = useRouter();
  const opcode = Number(param_opcode);
};
