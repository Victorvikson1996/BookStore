import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { COLORS } from "../Utils/COLORS";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
      <Button title="Hello" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

export default DetailsScreen;
