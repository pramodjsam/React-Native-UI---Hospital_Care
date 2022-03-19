import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import BackgroundHeader from "../components/BackgroundHeader";
import Header from "../components/Header";
import ListCard from "../components/ListCard";
import Map from "../components/Map";

const w = Dimensions.get("window").width;

const Search = () => {
  return (
    <ScrollView style={styles.container}>
      <BackgroundHeader style={styles.bg} />
      <Header />
      <Map />
      <ListCard />
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    height: (w * 2.3) / 4,
    // height: 280,
    width: Dimensions.get("window").width,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  container: {
    flex: 1,
  },
});
