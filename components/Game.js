import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

const Game = (props) => {
  const game = props.game
  
  const add = (game) => {
    console.log(game)
    console.log(props.addToBacklog)
    props.addToBacklog(game)
  }
  return (
    <View style={styles.containerItem} key={game._id}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{game.title}</Text>
        <Text style={styles.system}>{game.system}</Text>
      </View>
      <View style={styles.button}>
        <Button onPress={() => add(game)} title='&#43;' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    width: "90%",
    marginTop: 8,
  },
  text: {
    color: "#ffffff",
    width: "100%",
  },
  system: {
    color: "#434343",
  },
  button: {
    height: "100%",
  },
});

export default Game;
