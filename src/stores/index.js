import Event from "./events";
import User from "./user";
import People from "./people";
import Navigation from "./navigation";

const stores = {};
stores.user = new User(stores);
stores.event = new Event(stores);
stores.navigation = new Navigation(stores);
stores.people = new Peolpe(stores);

export default stores;