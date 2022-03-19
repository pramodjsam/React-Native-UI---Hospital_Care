import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MapView, { Marker } from "react-native-maps";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const w = Dimensions.get("window").width;

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <View
            style={{
              backgroundColor: "#EDE6EA",
              padding: 5,
              borderRadius: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#C49DBD",
                padding: 5,
                borderRadius: 40,
              }}
            >
              <LinearGradient
                style={styles.marker}
                colors={["#714B87", "#944787", "#984587"]}
              >
                <FontAwesome5 name="user-alt" color="#FFF" />
              </LinearGradient>
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapView: {
    width: w,
    height: 180,
  },
  marker: {
    backgroundColor: "#6C4C86",
    padding: 5,
    borderRadius: 40,
  },
});
