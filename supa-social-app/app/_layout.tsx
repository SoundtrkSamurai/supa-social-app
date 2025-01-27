import { AuthContextProvider, useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { User } from "@supabase/supabase-js";
import { getUserData } from "@/services/userService";

const _layout = () => (
  <AuthContextProvider>
    <MainLayout />
  </AuthContextProvider>
);

const MainLayout = () => {
  const authContext = useAuth();

  const updateUserData = async (user: User) => {
    let res = await getUserData(user.id);

    if (res.success) {
      authContext?.setUserData(res.data);
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session user", session?.user?.id);

      if (session) {
        authContext?.setAuth(session.user);
        updateUserData(session.user);
        router.replace("/home");
      } else {
        authContext?.setAuth(null);
        router.replace("/welcome");
      }
    });
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;
