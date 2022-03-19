import React from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BackgroundHeader from "../components/BackgroundHeader";
import HeaderTop from "../components/HeaderTop";

const w = Dimensions.get("window").width;

const Home = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <BackgroundHeader style={styles.bg} />
        <ScrollView style={styles.scrollView}>
          <HeaderTop />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    height: (w * 3) / 4,
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    backgroundColor: "#F0F1F2",
    // backgroundColor: "red",
    position: "relative",
  },
  scrollView: {
    flex: 1,
    // backgroundColor: "red",
  },
});
