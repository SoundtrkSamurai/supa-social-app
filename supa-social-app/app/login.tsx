import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWrapper } from "@/components";
import { theme } from "@/constants/theme";
import Icon from "@/assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "@/components/BackButton";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <BackButton router={router} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {},
});
