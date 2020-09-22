import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import jsondata from "./Data/data.json";

function DetailsScreen({ route, navigation }) {
  const id = route.params.id;
  const gettitle = route.params.title;

  useEffect(() => {
    navigation.setParams({ title: gettitle });
  }, [gettitle]);
  const findItem = jsondata.find((item) => item.id === id);

  const jokes = findItem.jokes;

  const listItem = () => {
    return jokes.map((item) => {
      return (
        <View key={item.text} style={styles.viewElement}>
          <Text style={styles.textStyle}>{item.text}</Text>
        </View>
      );
    });
  };
  return <ScrollView style={styles.container}>{listItem()}</ScrollView>;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DAAD4F",
  },
  viewElement: {
    backgroundColor: "#4390C3",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  textStyle: {
    fontSize: 17,
    color: "white",
    textAlign: "justify",
  },
});
export default DetailsScreen;
