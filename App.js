import "./src/initFB";
import React from "react";
import { Provider, abserver } from "mobx-react";
import {addNavigationHelpers} from 'react-navigation'
import AppNavigator from "./src/AppNavigator";
import stores from "./src/stores";

@abserver
export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator navigation={addNavigationHelpers(stores.navigation.config)}/>;
        {/*<AppNavigator navigation={stores.navigation.config}/>;*/}
      </Provider>
    );
  }
}