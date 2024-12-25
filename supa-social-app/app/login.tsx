import Icon from "@/assets/icons";
import { Button, ScreenWrapper } from "@/components";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { useOnLogin } from "@/hooks/useOnLogin";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();
  const onLogin = useOnLogin({ emailRef, passwordRef });
  const [loading, setLoading] = useState(false);

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton router={router} />

          {/* welcome */}
          <View>
            <Text style={styles.welcomeText}>Hey, Welcome Back!</Text>
          </View>

          {/* form */}
          <View style={styles.form}>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please login to continue.
            </Text>
            <Input
              icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
              placeholder="Enter your email"
              onChangeText={(value: string) => (emailRef.current = value)}
            />
            <Input
              icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
              placeholder="Enter your password"
              secureTextEntry
              onChangeText={(value: string) => (passwordRef.current = value)}
            />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>

          {/* button */}
          <Button title="Login" loading={loading} onPress={() => onLogin()} />

          {/* footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account?</Text>
            <Pressable onPress={() => router.push("/signUp")}>
              <Text
                style={[
                  styles.footerText,
                  { color: theme.colors.primaryDark, fontWeight: "semibold" },
                ]}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(2.5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: "bold",
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "bold",
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
