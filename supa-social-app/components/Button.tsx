import { theme } from "@/constants/theme";
import { hp } from "@/helpers/common";
import noop from "lodash/noop";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Loading from "./Loading";

const Button = ({
  buttonStyle,
  hasShadow = true,
  loading = false,
  textStyle,
  title,
  onPress = noop,
}: Props) => {
  const shadowStyle: ViewStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  return (
    <>
      {loading ? (
        <View
          style={[styles.button, buttonStyle, { backgroundColor: "white" }]}
        >
          <Loading />
        </View>
      ) : (
        <Pressable
          onPress={onPress}
          style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
        >
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
      )}
    </>
  );
};

export default Button;

type Props = Readonly<{
  buttonStyle?: ViewStyle;
  hasShadow?: boolean;
  loading?: boolean;
  textStyle?: TextStyle;
  title?: string;
  onPress?: () => void;
}>;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
    height: hp(6.6),
    justifyContent: "center",
  },
  text: {
    fontSize: hp(2.5),
    color: "white",
    fontWeight: "bold",
  },
});
