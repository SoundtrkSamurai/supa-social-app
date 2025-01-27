import { useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Alert } from "react-native";

export function useOnLogout() {
  const authContext = useAuth();

  return useCallback(async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Sing Out", "Error signing out!");
    }
  }, []);
} 