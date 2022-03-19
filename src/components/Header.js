import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.header}>
      <Entypo name="chevron-left" size={32} color="#FFF" />
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.headerRightContainer}>
          <Entypo name="map" size={25} color="#FFF" />
          <Octicons
            name="settings"
            style={styles.icon}
            size={25}
            color="#FFF"
          />
        </View>
      </View>
      <View style={styles.groupInput}>
        <View style={styles.wrapperInput}>
          <AntDesign name="search1" size={18} color="gray" />
          <TextInput placeholder="San Francisco" style={styles.inputText} />
        </View>
        <View style={styles.wrapperInput}>
          <Feather name="map-pin" size={18} color="#9770A3" />
          <TextInput
            placeholder="Current Location"
            style={[styles.inputText, { color: "#9770A3" }]}
          />
          <Text>12 mi</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    // marginTop: 10,
    padding: 15,
  },
  headerBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 12,
    transform: [{ rotate: "-90deg" }],
  },
  wrapperInput: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  inputText: {
    flex: 1,
    padding: 10,
  },
});
