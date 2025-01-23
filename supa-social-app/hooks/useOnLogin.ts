import { Dispatch, MutableRefObject, SetStateAction, useCallback } from "react";
import { Alert } from "react-native";
import { supabase } from "@/lib/supabase";

export function useOnLogin({ emailRef, passwordRef, setLoading }: Params) {
  return useCallback(async () => {
    if (!emailRef.current || !passwordRef.current) {
      return Alert.alert("Login", "Please fill all the fields!");
    }

    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    console.log("error: ", error);
    if (error) {
      Alert.alert("Login", error.message);
    }
  }, [emailRef, passwordRef]);
}

type Params = Readonly<{
  emailRef: MutableRefObject<string>;
  passwordRef: MutableRefObject<string>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}>;
