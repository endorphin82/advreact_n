import { observable, computed } from "mobx";
import { entitiesFromFB } from "./utils";
import firebase from "firebase";

class Events {
  @observable loading = false;
  @observable loaded = false;

  @observable entities = {};

  @computed get list() {
    return Object.values(this.entities);
  }

  loadAll() {
    this.loading = true;

    firebase.database().ref("events")
      .once("value", data => {
        this.entities = entitiesFromFB(data.val());
        this.loading = false;
      });
  }
}

export default Events();