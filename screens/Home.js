import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import jsondata from "./Data/data.json";

function HomeScreen({ navigation }) {
  const renderList = (data) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Details", {
            id: data.id,
            title: data.title,
          })
        }
      >
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text>Home screen!!S </Text>
      <View style={styles.itemView}>
        <FlatList
          data={jsondata}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => renderList(item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4E575C",
    flex: 1,
  },
  viewStyle: {
    margin: 10,
    backgroundColor: "#2C98E0",
    height: 30,
    borderRadius: 20,
  },
  textStyle: {
    textAlign: "center",
    paddingTop: 3,
    fontSize: 17,
    color: "white",
    textAlign: "center",
  },
});

export default HomeScreen;
