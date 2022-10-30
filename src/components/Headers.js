import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../Utils/COLORS";

const Headers = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default Headers;
