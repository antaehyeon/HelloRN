import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text>200</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
