import { theme } from "@/constants";
import { hp } from "@/helpers/common";
import React, { LegacyRef, ReactNode } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";

const Input = ({
  containerStyles,
  icon,
  inputRef,
  placeholder,
  ...props
}: Props) => {
  return (
    <View style={[styles.container, containerStyles ?? containerStyles]}>
      {icon && icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textLight}
        ref={inputRef && inputRef}
        style={{ flex: 1 }}
        {...props}
      />
    </View>
  );
};

export default Input;

type Props = Readonly<{
  containerStyles?: ViewStyle;
  icon?: ReactNode;
  inputRef?: LegacyRef<TextInput>;
  placeholder?: string;
}>;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: theme.colors.text,
    borderCurve: "continuous",
    borderRadius: theme.radius.xxl,
    borderWidth: 0.4,
    flexDirection: "row",
    gap: 12,
    height: hp(7.2),
    justifyContent: "center",
    paddingHorizontal: 18,
  },
});
