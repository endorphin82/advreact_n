import React, { Component } from "react";
import { Button, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { eventList } from "../../fixtures";
import ConfirmModal from "../common/ConfirmModal";
import { observer, inject } from "mobx-react";
import { web } from "react-native-communications";

inject("navigation");

@observer
class Event extends Component {
  static defaultProps = {
    event: eventList[0]
  };

  state = {
    confirmModal: false
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
        <TouchableOpacity onPress={this.goToURL}>
          <Text style={styles.text}>{event.url}</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button
            onPress={this.handleDelete}
            title="Delete Event"
            color="#F55"
          />
          <Button
            onPress={this.goToMap}
            title='show on map'
          />
        </View>
        <ConfirmModal visible={this.state.confirmModal}
                      onConfirm={this.confirmDelete}
                      onCancel={this.cancelDelete}
        >
          Are you sure you want to delete "{event.title}"
        </ConfirmModal>
      </View>
    );
  }

  goToMap = () => {
    this.props.navigation.goTo("eventMap", { uid: this.props.event.uid });
  };

  goToURL = () => {
    web(this.props.event.url);
  };

  handleDelete = () => {
    this.props.event.month = "BABABABA";
    // this.setState({
    //   confirmModal: true
    // });
  };

  confirmDelete = () => this.setState({ confirmModal: false });
  cancelDelete = () => this.setState({ confirmModal: false });
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
  },
  button: {
    width: "100%",
    height: 100,
    marginBottom: 30
  }
});

export default Event;