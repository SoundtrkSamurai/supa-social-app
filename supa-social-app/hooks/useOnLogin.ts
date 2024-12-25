import { MutableRefObject, useCallback } from "react";
import { Alert } from "react-native";

export function useOnLogin({ emailRef, passwordRef }: Params) {
  return useCallback(() => {
    if(!emailRef.current || !passwordRef.current) {
      return Alert.alert("Login", "Please fill all the fields!");
    }
  }, [emailRef, passwordRef])
}

type Params = Readonly<{
  emailRef: MutableRefObject<string>;
  passwordRef: MutableRefObject<string>
}>