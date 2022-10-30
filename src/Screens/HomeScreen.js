import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Headers, Input } from "../components";
import { widthToDp, heightToDp } from "rn-responsive-screen";
import { BookStoreItems } from "../components";
import { COLORS } from "../Utils/COLORS";
import { StatusBar } from "expo-status-bar";

const API_URI = "https://fudap-books-api.herokuapp.com/books/";

const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  //   const getBooks = () => fetch(API_URI).then();

  const getBooks = async () => {
    try {
      const response = await fetch(API_URI);
      const json = await response.json();
      setData(json, "books");
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBooks = () => {
    return fetch(API_URI)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((books) => {
        setData(books);
        // console.log(books);
      })
      .catch((error) => {
        console.log("Error Fetching data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (isLoading)
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          flex: 1,
          top: 40,
        }}
      >
        <ActivityIndicator
          size="large"
          testId="loading"
          accessibilityLabel="App is loading books"
          color={COLORS.yellow}
          testID="loading"
        />
      </View>
    );

  if (error)
    return (
      <View style={{ alignContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Error</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Headers title="Book Store" />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Book Name"
          style={styles.textInput}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <View style={styles.products}>
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <FlatList
            data={data}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <BookStoreItems item={item} accessibilityLabel="books" />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  products: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: widthToDp(100),
    paddingHorizontal: widthToDp(6),
    justifyContent: "space-between",
  },
  textInput: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    borderColor: COLORS.grey,
    borderWidth: 1,
    width: width * 0.6,
  },
  containerBox: {
    flexDirection: "row",
  },
});

export default HomeScreen;
