import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { abserver, inject } from "mobx-react";
import PeopleList from "../../components/people/PeopleList";
import { text, email } from "react-native-communications";

@inject("people")
@abserver
class PeopleListScreen extends Component {
  static navigatiomOptions = {
    title: "People List"
  };

  componentDidMount() {
    const { people } = this.props;
    if (!people.loaded && !people.loading) people.loadAll();
  }

  render() {
    const { people } = this.props;
    if (people.loading) return this.getLoader();
    return <PeopleList onPersonPress={this.handlePress}/>;
  }

  getLoader() {
    return <View><ActivityIndicator size='large'/></View>;
  }

  handlePress = uid => {
    // email(this.props.people.entities[uid].email);
    text('+123456789', 'event notification');
    // this.props.people.entities[uid].email = "LALALALALA";
  };
}

const styles = StyleSheet.create({});

export default PeopleListScreen;