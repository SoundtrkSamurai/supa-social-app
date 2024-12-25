import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "@/assets/icons";
import { theme } from "@/constants";
import { Router } from "expo-router";

const BackButton = ({ router, size = 26 }: Props) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.container}>
      <Icon name="arrowLeft" strokeWidth={2.5} color={theme.colors.text} />
    </Pressable>
  );
};

export default BackButton;

type Props = Readonly<{
  router: Router;
  size?: number;
}>;

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: theme.radius.sm,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});
