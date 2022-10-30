import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const BookStoreItems = ({ item }) => {
  const navigation = useNavigation();

  const _goToDetails = () => {
    return navigation.navigate("DETAIL", {
      image: item.imgUrl,
      des: item.description,
      title: item.title,
      publisher: item.publisher,
      author: item.author,
      pages: item.pages,
      ISBN: item.isbn,
      date: item.published,
      id: item.id,
      subtitle: item.subtitle,
    });
  };

  return (
    <Pressable
      onPress={_goToDetails}
      style={styles.container}
      key={item.id}
      testID="book"
    >
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{item.author}</Text>
      <View style={styles.priceContainer}>
        <Text>{item.publisher}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    borderRadius: 10,
    marginBottom: heightToDp(4),
    marginRight: widthToDp(4),
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    padding: 10,
    width: widthToDp(42),
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  image: {
    height: heightToDp(40),
    borderRadius: 7,
    marginBottom: heightToDp(2),
  },
  title: {
    fontSize: widthToDp(3.7),
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightToDp(3),
  },
  category: {
    fontSize: widthToDp(3.4),
    color: "#828282",
    marginTop: 3,
  },
  price: {
    fontSize: widthToDp(4),
    fontWeight: "bold",
  },
});
export default BookStoreItems;
