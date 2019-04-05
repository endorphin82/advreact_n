import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Location, Permissions, MapView } from "expo";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class EventMapScreen extends Component {
  static navigationOptions = {
    title: "map"
  };

  @observable errorMessage: null;
  @observable permissionAsked: false;
  @observable location: null;

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    this.permissionAsked = true;
    if (status !== "granted") this.errorMessage = "permission denied";

    this.location = await Location.getCurrentPositionAsync();
  }


  render() {
    if (!this.permissionAsked) return <Text>No permission yet</Text>;
    if (this.errorMessage) return <Text>{this.errorMessage}</Text>;

    const region = this.location && {
      ...this.location.coords,
      latitude: 37.78825,
      longitude: -122.4324
    };

    const marker = this.location && <MapView.Marker
      coordinate={this.location.coords}
      title="event place"
    />;


    return (
      <MapView
        style={styles.map}
        region={region}
      >
        {marker}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

export default EventMapScreen;