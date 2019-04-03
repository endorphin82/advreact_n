import Event from "./events";
import User from "./user";
import Navigation from "./navigation";

const stores = {};
Object.aassign(stores, {
  event: new Event(stores),
  user: new User(stores),
  navigation: new Navigation(stores)
});
export default stores;