import Icon from "@/assets/icons";
import { Button, ScreenWrapper } from "@/components";
import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/helpers/common";
import { useOnSignUp } from "@/hooks/useOnSingup";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SignUp = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();
  const onSignUp = useOnSignUp({ emailRef, passwordRef, nameRef });
  const [loading, setLoading] = useState(false);

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton router={router} />

          {/* welcome */}
          <View>
            <Text style={styles.welcomeText}>Let's Get Started!</Text>
          </View>

          {/* form */}
          <View style={styles.form}>
            <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
              Please enter the details to create a new account.
            </Text>
            <Input
              icon={<Icon name="user" size={26} strokeWidth={1.6} />}
              placeholder="Enter your name"
              onChangeText={(value: string) => (nameRef.current = value)}
            />
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
          </View>

          {/* button */}
          <Button
            title="Sign Up"
            loading={loading}
            onPress={() => onSignUp()}
          />

          {/* footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => router.push("/login")}>
              <Text
                style={[
                  styles.footerText,
                  { color: theme.colors.primaryDark, fontWeight: "semibold" },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

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
