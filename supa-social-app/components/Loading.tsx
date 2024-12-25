import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";

const Loading = ({ size = "large", color = theme.colors.primary }: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

type Props = Readonly<{
  color?: string;
  size?: number | "large" | "small" | undefined;
}>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
