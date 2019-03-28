import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import SignIn from "./components/auth/SignIn";
import Hello from "./components/Hello";
import Event from "./components/event/Event";
import EventList from "./components/event/EventList";

class Root extends Component {
  render() {
    return (
      <View>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.image}
          resizeMode='contain'
        />
        {/*<Text>hi3</Text>*/}
        {/*<SignIn/>*/}
        {/*<Hello/>*/}
        <EventList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 30,
    marginTop: 25
  }
});

export default Root;