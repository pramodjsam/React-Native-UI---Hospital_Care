import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const w = Dimensions.get("window").width;

const BackgroundHeader = ({ style }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.LinearGradient, style]}
      colors={["#5D0E7F", "#7A007E", "#9C007F"]}
    ></LinearGradient>
  );
};

export default BackgroundHeader;

const styles = StyleSheet.create({
  LinearGradient: {
    // height: (w * 3) / 4,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    // position: "absolute",
    // width: w,
  },
});
