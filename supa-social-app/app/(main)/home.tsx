import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, ScreenWrapper } from "@/components";
import { useOnLogout } from "@/hooks/useOnLogout";
import Loading from "@/components/Loading";
import { hp, wp } from "@/helpers/common";

const Home = () => {
  const logout = useOnLogout();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(3),
  },
});
