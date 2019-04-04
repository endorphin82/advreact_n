import EntitiesStore, { loadAllHelper } from "./EntitiesStore";
import { computed, action } from "mobx";
import groupBy from "lodash/groupBy";

class PeopleStore extends EntitiesStore {
  @computed get section() {
    const grouped = groupBy(this.list, person => person.firstName.charAt(0));

    return Object.entries(grouped).map(([letter, list]) => ({
      title: `${letter}, ${list.length} people`,
      data: list.map(person => ({ key: person.uid, person }))
    }));
  }

  @action loadAll = loadAllHelper("people");
}

export default PeopleStore;