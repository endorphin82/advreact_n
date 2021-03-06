import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import EventList from "../../components/event/EventList";

@inject('events')
@observer
class EventListScreen extends Component {
  static navigationOptions = {
    title: "Event List"
  };

  componentDidMount() {
    this.prpos.events.loadAll();
  }

  getLoader() {
    return <View><ActivityIndicator size='large'/></View>;
  }

  render() {
    const {events} = this.props;
    if (events.loading) return this.getLoader();
    return <EventList onEventPress={this.handleEventPress} events={events.list}/>;
  }

  handleEventPress = (uid) => {
    console.log("-----", this.props);
    this.props.navigation.navigate(
      "event",
      { uid });
  };
}

const styles = StyleSheet.create({});

export default EventListScreen;