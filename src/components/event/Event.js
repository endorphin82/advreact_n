import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { eventList } from "../../fixtures";

class Event extends Component {

  static defaultProps = {
    event: eventList[0]
  };

  render() {
    const { event } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>{event.title}</Text>
        <View>
          <Image source={{ uri: "http://lorempixel.com/g/200/100/technics/" }}
                 style={styles.image}/>
          <Text>{event.where}</Text>
          <Text>{event.when}</Text>
        </View>
        <Text style={styles.text}>{event.url}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: '#0ff',
    paddingTop: 15,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#cc0",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5
  },
  text: {
    width: "100%",
    height: 100,
    marginBottom: 20,
    textAlign: "center"
  },
  image: {
    width: 200,
    height: 100
  }
});

export default Event;