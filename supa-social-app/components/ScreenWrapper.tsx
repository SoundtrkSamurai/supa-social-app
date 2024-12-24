import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg }: Props) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : 30;

  return (
    <View style={{ paddingTop, backgroundColor: bg, ...styles.container }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = PropsWithChildren &
  Readonly<{
    bg?: string;
  }>;
