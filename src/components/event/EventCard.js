import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../common/Card";

class EventCard extends Component {
  render() {
    const { event } = this.props;
    return (
      <Card style={styles.container}>
        <Image source={{ uri: "http://lorempixel.com/g/200/100/technics/" }}
               style={styles.image}
        />
        <View style={styles.description}>
          <Text>{event.title}</Text>
          <Text>{event.url}</Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  image: {
    width: 100,
    height: 50
  }
});

export default EventCard;