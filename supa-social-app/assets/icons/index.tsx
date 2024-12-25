import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import Home from "./Home";
import { SvgProps } from "react-native-svg";
import { theme } from "@/constants/theme";

const icons: Record<string, (props: SvgProps) => JSX.Element> = {
  home: Home,
};

const Icon = ({ name, size, strokeWidth, color, ...props }: Props) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      color={color || theme.colors.textLight}
      height={size || 24}
      strokeWidth={strokeWidth || 1.9}
      width={size || 24}
      {...props}
    />
  );
};

export default Icon;

type Props = Pick<SvgProps, "strokeWidth" | "color"> &
  Readonly<{
    name: string;
    size?: number;
  }>;

const styles = StyleSheet.create({
  container: {},
});
