import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, SectionList } from "react-native";
import { eventList } from "../../fixtures";
import EventCard from "./EventCard";
import groupBy from "lodash/groupBy";

class EventList extends Component {
  static defaultProps = {
    events: eventList
  };

  render() {
    const {onEventPress, events} = this.props;
    const grouped = groupBy(events, event => event.title.charAt(0));
    const sections = Object.entries(grouped).map(([letter, list]) => ({
      title: `${letter}, ${list.length} events`,
      data: list.map(event => ({ key: event.uid, event }))
    }));
    return <SectionList
      sections={sections}
      renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
      renderItem={({ item }) => <TouchableOpacity onPress={onEventPress.bind(null, item.key)}>
        <EventCard event={item.event}/>
      </TouchableOpacity>}
    />;
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f0f0f0",
    height: 40,
    lineHeight: 40,
    marginBottom: 5,
    shadowOffset: {
      height: 2, width: 0
    },
    shadowOpacity: 0.3,
    elevation: 3
  }
});

export default EventList;