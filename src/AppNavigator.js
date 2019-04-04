import {TabNavigator, StackNavigator } from "react-navigation";
import Auth from "./screens/Auth";
import Event from "./screens/events/Event";
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
  }
});

export default AppNavigator;