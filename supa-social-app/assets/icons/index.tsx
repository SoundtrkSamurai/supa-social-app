import { theme } from "@/constants/theme";
import React from "react";
import { StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import ArrowLeft from "./ArrowLeft";
import Home from "./Home";
import Mail from "./Mail";
import Lock from "./Lock";
import User from "./User";

const icons: Record<string, (props: SvgProps) => JSX.Element> = {
  arrowLeft: ArrowLeft,
  home: Home,
  lock: Lock,
  mail: Mail,
  user: User,
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
