import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

const Face = ({ color, icon, title, full }) => {
  return (
    <View style={styles.faceGroup}>
      <Fontisto name={icon} size={36} color={color} />
      <Text style={styles.faceText}>{title}</Text>
    </View>
  );
};

export default Face;

const styles = StyleSheet.create({
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },
  faceGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
});
