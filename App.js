import React from "react";
import { NavigationContainer, Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Backlog from "./components/Backlog";
import Games from "./components/Games";
import Home from "./components/Home";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Games Backlog'
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#141414",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name='Search' component={Games} options={{
            headerStyle: {
              backgroundColor: "#141414",
            },
            headerTintColor: "#fff",
          }}/>
        <Stack.Screen name='Backlog' component={Backlog} options={{
            headerStyle: {
              backgroundColor: "#141414",
            },
            headerTintColor: "#fff",
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
