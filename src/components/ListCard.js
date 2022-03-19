import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardHome from "./CardHome";

const ListCard = () => {
  return (
    <View>
      <CardHome
        noHeader
        noFooter
        book
        title="Your Next Appointment"
        info={{
          name: "Dr T Pay Dhar",
          time: "Sunday, May 15th at 8:00 PM",
          address: "570 Kemmer Shores",
          detail: "San Francisco, CA 90293",
          rating: 4,
          isLike: true,
          tag: "Wellness",
        }}
      />
      <CardHome
        noHeader
        noFooter
        book
        title="Specialist in your area"
        info={{
          name: "Dr Ayon Das",
          time: "Popular Pharma Limited",
          address: "Dermatologists",
          detail: "San Francisco, CA | 5 min",
          rating: 4,
          isLike: true,
          tag: "Wellness",
        }}
      />
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({});
