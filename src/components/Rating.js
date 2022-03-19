import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((e, i) => {
          if (rating > i) {
            return (
              <AntDesign
                style={{ marginRight: 5 }}
                color="#FA8D00"
                key={i}
                name="star"
              />
            );
          }
          return (
            <AntDesign
              color="#FA8D00"
              style={{ marginRight: 5 }}
              key={i}
              name="staro"
            />
          );
        })}
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    marginTop: 5,
  },
});
