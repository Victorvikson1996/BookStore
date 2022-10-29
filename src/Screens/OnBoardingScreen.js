import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../Utils/COLORS";

const OnBoardingScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("HOME");
  }, 3000);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <View style={styles.container}>
        <Text style={styles.text}>Book Store</Text>
      </View>
    </SafeAreaView>
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

export default OnBoardingScreen;
