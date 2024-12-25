import { MutableRefObject, useCallback } from "react";
import { Alert } from "react-native";

export function useOnSignUp({ emailRef, passwordRef, nameRef }: Params) {
  return useCallback(() => {
    if(!emailRef.current || !passwordRef.current || !nameRef.current) {
      return Alert.alert("Login", "Please fill all the fields!");
    }
  }, [emailRef, passwordRef, nameRef])
}

type Params = Readonly<{
  emailRef: MutableRefObject<string>;
  passwordRef: MutableRefObject<string>;
  nameRef: MutableRefObject<string>;
}>