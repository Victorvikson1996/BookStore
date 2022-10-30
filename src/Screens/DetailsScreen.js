import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { widthToDp, heightToDp, height, width } from "rn-responsive-screen";
import { COLORS } from "../Utils/COLORS";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{ padding: 10, marginTop: 30 }}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>
  );
};

const DetailsScreen = ({ route, navigation, item }) => {
  const {
    image,
    title,
    des,
    publisher,
    author,
    pages,
    ISBN,
    date,
    id,
    subtitle,
  } = route.params;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <BackButton />
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={{ marginRight: 10, marginHorizontal: 20, padding: 10 }}>
          <Text style={styles.heading}>Book Title: {title}</Text>
          <Text style={styles.author}>Author: {author}</Text>
          <Text style={styles.subtitle}>Subtitle: {subtitle}</Text>
          <Text style={styles.description}>{des}</Text>
          <Text style={styles.publisher}>Publisher: {publisher}</Text>
          <Text style={styles.isbn}>ISBN: {ISBN}</Text>
          <Text style={styles.pages}>Pages: {pages}</Text>
          <Text style={styles.date}>
            Published Date: {moment(date).utc().format("MMM Do, YYYY")}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 200,
  },

  imageContainer: {
    paddingBottom: 10,
    alignItems: "center",
  },

  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  description: {
    fontSize: 14,
    color: COLORS.grey,
    marginTop: 5,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
  },

  publisher: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  isbn: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },

  pages: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },

  text: {
    fontSize: 20,
    fontWeight: "normal",
    color: COLORS.violet,
  },
});

export default DetailsScreen;
