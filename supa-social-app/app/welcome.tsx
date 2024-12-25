import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWrapper, Button } from "@/components/";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "@/helpers/common";
import { theme } from "@/constants/theme";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* welcome image */}
        <Image
          style={styles.welcomeImage}
          source={require("../assets/images/welcome.png")}
          resizeMode="contain"
        />

        {/* title */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchline}>
            Where Every Thought Finds A Home and Every Image Finds A Story
          </Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("/signUp")}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.loginText}>Already Have An Account!</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text
              style={[
                styles.loginText,
                { color: theme.colors.primaryDark, fontWeight: "semibold" },
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  bottomTextContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  loginText: {
    color: theme.colors.text,
    fontSize: hp(1.6),
    textAlign: "center",
  },
  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: "800",
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
});
