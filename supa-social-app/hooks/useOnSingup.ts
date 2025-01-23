import { supabase } from "@/lib/supabase";
import { Dispatch, MutableRefObject, SetStateAction, useCallback } from "react";
import { Alert } from "react-native";

export function useOnSignUp({
  emailRef,
  passwordRef,
  nameRef,
  setLoading,
}: Params) {
  return useCallback(async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      return Alert.alert("Login", "Please fill all the fields!");
    }

    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(true);

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    setLoading(false);

    if (error) {
      Alert.alert("Sign up error", error.message);
    }
  }, [emailRef, passwordRef, nameRef]);
}

type Params = Readonly<{
  emailRef: MutableRefObject<string>;
  passwordRef: MutableRefObject<string>;
  nameRef: MutableRefObject<string>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}>;
