import {TabNavigator, StackNavigator } from "react-navigation";
import Auth from "./screens/Auth";
import Event from "./screens/events/Event";
import EventMap from "./screens/events/EventMap";
import EventList from "./screens/events/EventList";

const ListNavigator = TabNavigator({
  events: {
    screen: EventList
  },
  people: {
    screen: PeopleList
  }
})

const AppNavigator = StackNavigator({
  lists: {
    screen: ListNavigator
  },
  auth: {
    screen: Auth
  },
  event: {
    screen: Event
  },
  eventMap: {
    screen: EventMap
  }
});

export default AppNavigator;