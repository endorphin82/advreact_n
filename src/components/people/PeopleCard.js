import React, { Component } from "react";
import {Text, Image, View, StyleSheet } from "react-native";
import Card from "../common/Card";
import { abserver } from "mobx-react";

@abserver
class PeopleCard extends Component {
  render() {
    const { email, firstName, lastName } = this.props.person;
    return (
      <Card style={styles.container}>
        <Image source={{ uri: "http://lorempixel.com/g/200/100/people/" }} style={styles.avatar}/>
        <View style={styles.content}>
          <Text style={styles.email}>{email}></Text>
          <Text>{firstName} {lastName}</Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  avatar: {
    width: 200,
    height: 100
    margin: 5
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignment: "center"
  },
  email: {
    fontWeight: "bold"
  }
});

export default PeopleCard;