import BasicStore from "./BasicStore";
import firebase from "firebase";
import { entitiesFromFB } from "./utils";
import { observable } from "mobx";

class EntitiesStore extends BasicStore {
  @observable loading = false
}

export function loadAllHelper(refName) {
  return function() {
    this.loading = true;

    firebase.database().ref(refName)
      .once("value", data => {
        this.entities = entitiesFromFB(data.val());
        this.loading = false;
        this.loaded = true;
      });
  };
}

export default EntitiesStore;