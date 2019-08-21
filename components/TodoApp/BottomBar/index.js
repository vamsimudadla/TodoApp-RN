import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { Text } from "react-native";
import { filters } from "../../../constants";
import translate from "../../../utils/languages.utils";
const AllRoute = () => <Text />;

const ActiveRoute = () => <Text />;

const CompletedRoute = () => <Text />;

export default class BottomBar extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: filters.all,
        title: translate("All_filter"),
        icon: "format-list-bulleted"
      },
      {
        key: filters.active,
        title: translate("Active_filter"),
        icon: "lock-open"
      },
      {
        key: filters.completed,
        title: translate("Completed_filter"),
        icon: "lock-outline"
      }
    ]
  };

  _handleIndexChange = index => {
    const { todoStore } = this.props;
    this.setState({ index });
    todoStore.changeActiveFilter(this.state.routes[index].key);
  };

  _renderScene = BottomNavigation.SceneMap({
    all: AllRoute,
    active: ActiveRoute,
    completed: CompletedRoute
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
