import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

const index = () => {
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push("/welcome")} />
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {},
});
