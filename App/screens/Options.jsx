import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.touchableStyle}>
          <Text style={styles.textStyle}>Themes</Text>
          <Entypo name="chevron-right" size={20} />
        </TouchableOpacity>

        <View style={styles.seperator} />

        <TouchableOpacity style={styles.touchableStyle}>
          <Text style={styles.textStyle}>React Native Basics</Text>
        </TouchableOpacity>

        <View style={styles.seperator} />

        <TouchableOpacity style={styles.touchableStyle}>
          <Text style={styles.textStyle}>React Native by Example</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },

  touchableStyle: {
    flexDirection: "column-reverse",
    padding : 16,
  },

  textStyle: {
    color: "#3e3e3e",
    fontSize: 16,
  },

  seperator : {
    backgroundColor : "#f2f2f2",
    height : 1
  }
});
