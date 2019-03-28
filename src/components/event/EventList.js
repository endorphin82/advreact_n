import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { eventList } from "../../fixtures";
import EventCard from "./EventCard";

class EventList extends Component {
  static defaultProps = {
    events: eventList
  };

  render() {
    const { events } = this.props;
    return (
      <ScrollView>
        <View>
          {events.map(event => <EventCard key={event.uid} event={event}/>)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});

export default EventList;