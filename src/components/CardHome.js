import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Rating from "./Rating";
import { LinearGradient } from "expo-linear-gradient";

const CardHome = ({ title, info, book, noFooter, noHeader }) => {
  const [pressIn, setPressIn] = useState(false);

  return (
    <View style={styles.cardContainer}>
      {!noHeader && (
        <View style={styles.cardHeaderContainer}>
          <Text style={styles.cardHeading}>{title}</Text>
          <Text style={styles.cardMore}>See All</Text>
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            // resizeMode="contain"
            source={require("../assets/doctor.jpg")}
          />
          <View style={styles.cardLeftSide}>
            {info.tag && <Text style={styles.tag}>{info.tag}</Text>}
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
            {info.rating && <Rating rating={info.rating} />}
            <View style={styles.iconMore}>
              <Fontisto name="angle-right" color="gray" />
            </View>
            {info.isLike && (
              <View style={styles.iconLike}>
                <Fontisto color="#E8008D" size={22} name="heart" />
              </View>
            )}
            {book && (
              <View style={styles.buttonBook}>
                <TouchableOpacity>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnGradient}
                    colors={["#554383", "#943F86"]}
                  >
                    <Text style={styles.btnBookText}>Book Visit</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {!noFooter && <View style={styles.margin} />}

        {!noFooter && (
          <View style={styles.cardBodyBottom}>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.cardGroupIcon]}
              onPressOut={() => setPressIn(0)}
              onPressIn={() => setPressIn(1)}
              style={styles.cardGroupIcon}
            >
              <AntDesign
                name="checkcircleo"
                size={32}
                color={pressIn == 1 ? "#B066A4" : "black"}
              />
              <Text
                style={[
                  styles.cardBottomTitle,
                  { color: pressIn == 1 ? "#B066A4" : "black" },
                ]}
              >
                Check-in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.cardGroupIcon]}
              onPressOut={() => setPressIn(0)}
              onPressIn={() => setPressIn(2)}
              style={styles.cardGroupIcon}
            >
              <AntDesign
                name="closecircleo"
                size={32}
                color={pressIn == 2 ? "#B066A4" : "black"}
              />
              <Text
                style={[
                  styles.cardBottomTitle,
                  { color: pressIn == 2 ? "#B066A4" : "black" },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardGroupIcon}
              activeOpacity={1}
              style={[styles.cardGroupIcon]}
              onPressOut={() => setPressIn(0)}
              onPressIn={() => setPressIn(3)}
            >
              <AntDesign
                name="calendar"
                size={32}
                color={pressIn == 3 ? "#B066A4" : "black"}
              />
              <Text
                style={[
                  styles.cardBottomTitle,
                  { color: pressIn == 3 ? "#B066A4" : "black" },
                ]}
              >
                Calendar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardGroupIcon}
              activeOpacity={1}
              onPressOut={() => setPressIn(0)}
              onPressIn={() => setPressIn(4)}
            >
              <MaterialIcons
                name="explore"
                size={32}
                color={pressIn == 4 ? "#B066A4" : "black"}
              />
              <Text
                style={[
                  styles.cardBottomTitle,
                  { color: pressIn == 4 ? "#B066A4" : "black" },
                ]}
              >
                Directions
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  tag: {
    color: "#B066A4",
  },
  cardHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardMore: {
    fontWeight: "bold",
    color: "#786C95",
  },
  cardAvatar: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "gray",
  },
  cardBody: {
    padding: 15,
    backgroundColor: "#FFF",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: "row",
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTime: {
    color: "#222",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
  },
  iconMore: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  cardBodyBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 10,
  },
  cardGroupIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    height: 1,
    backgroundColor: "#F0F1F2",
    width: "100%",
    marginVertical: 10,
  },
  iconLike: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
  },
  buttonBook: {
    flexDirection: "row",
    marginTop: 10,
  },
});
