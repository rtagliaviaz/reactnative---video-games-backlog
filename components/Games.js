import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import Game from "./Game";
import axios from "axios";

const api = 'https://node-gamesdb.herokuapp.com';

const Games = () => {
  const [gameTitle, setGameTitle] = useState("");
  const [games, setGames] = useState([]);

  const showAlert = (message) =>
    Alert.alert(
      "!!!",
      message,
      [{text: "ok"}],
      {cancelable: true}
    );

  const searchGame = async (gameTitle) => {
    if (gameTitle == "") showAlert("Title can't be empty!");
    const res = await axios.post(api, {
      gameTitle,
    });
    if (res.data.length == 0) showAlert("Can't find games with that title!");
    setGames(res.data);
  };

  const addToBacklog = async (game) => {
    // console.log(game)
    try {
      const res = await axios.post(`${api}/backlog`, {
        game,
      });

      showAlert(`${game.title} added to the backlog!!`);
    } catch (error) {
      showAlert("Game already Added");
      console.log(error);
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <View>
        <TextInput
          autoFocus={true}
          style={{ height: 40 }}
          placeholder='search a game'
          onChangeText={(gameTitle) => setGameTitle(gameTitle)}
          defaultValue={gameTitle}
          returnKeyType="search"
          onSubmitEditing={() => searchGame(gameTitle)}
        />

      </View>

      <View style={styles.container}>
        <StatusBar backgroundColor='#141414' />
        {/* <Home></Home> */}
        {games ? (
          <FlatList
            style={styles.list}
            data={games}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <Game game={item} key={item._id} addToBacklog={() => addToBacklog(item)}/>
              );
            }}
            keyExtractor={(item) => item._id}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    alignItems: "center",
    flex: 1,
  },
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
  title: {
    marginTop: 20,
    color: "#fff",
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  system: {
    color: "#434343",
  },
  button: {
    height: "100%",
  },
});

export default Games;
