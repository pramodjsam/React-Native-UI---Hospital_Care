import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardHome from "./CardHome";
import Face from "./Face";

const HeaderTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hi Carly</Text>
        <Text style={styles.desc}>How are you feeling today</Text>
      </View>
      <View style={styles.faceContainer}>
        <Face icon="laughing" title="Great" color="#E23f9c" />
        <Face icon="slightly-smile" title="Good" color="#C55696" />
        <Face icon="neutral" title="Okay" color="#A5008c" />
        <Face icon="frowning" title="Bad" color="#827791" />
        <Face icon="expressionless" title="Awfull" color="black" />
      </View>
      <View>
        <CardHome
          title="Your Next Appointment"
          info={{
            name: "Dr T Pay Dhar",
            time: "Sunday, May 15th at 8:00 PM",
            address: "570 Kemmer Shores",
            detail: "San Francisco, CA 90293",
          }}
        />

        <CardHome
          title="Specialist in your area"
          info={{
            name: "Dr Ayon Das",
            time: "Popular Pharma Limited",
            address: "Dermatologists",
            detail: "San Francisco, CA | 5 min",
            isLike: true,
            rating: 4,
            tag: "Wellness",
          }}
        />
      </View>
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  desc: {
    fontSize: 20,
    fontWeight: "400",
    color: "#FFF",
    marginTop: 5,
  },
  faceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
