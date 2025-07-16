import { AppRegistry, View, Text } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello World</Text>
    </View>
  );
};

AppRegistry.registerComponent("main", () => App);

export default App;
