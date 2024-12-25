import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWrapper } from "@/components";
import { theme } from "@/constants/theme";
import Icon from "@/assets/icons";

const login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>Login</Text>
        <Icon name="home" color="#ff0000" />
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {},
});
