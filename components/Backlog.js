import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  StatusBar,
  Alert
} from "react-native";
import Home from './Home'
import axios from "axios";

// const api = "http://192.168.0.107:4000/backlog";
const api = "https://node-gamesdb.herokuapp.com/backlog";

const App = () => {
  const [gameTitle, setGameTitle] = useState("");
  const [backlog, setBacklog] = useState([]);

  const showAlert = (message) => {
    Alert.alert(
      "!!!",
      message,
      [{text: "ok"}],
      {cancelable: true}
    );
  }

  const getBacklog = async () => {
    const res = await axios.get(api);
    sortBacklogByName(res.data)
  };
  useEffect(() => {
    getBacklog();
  }, []);

  const deleteFromBacklog = async (id) => {
    await axios.delete(`${api}/${id}`);
    showAlert('Removed from Backlog!!')
    getBacklog();
  }

  const sortBacklogByName = (games) => {
    games.sort((a, b) => a.title.localeCompare(b.title))
    setBacklog(games)
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#141414' />
      {/* <Home></Home> */}
      <Text style={styles.title}>Games Backlog</Text>
      <FlatList
        style={styles.list}
        data={backlog}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          // console.log(item)
          return (
            <View style={styles.containerItem} >
              <View >
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.system}>{item.system}</Text>
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => deleteFromBacklog(item._id)}
                  title='&#10003;'
                  
                  // color="#841584"
                  // accessibilityLabel="Learn more about this purple button"
                />
              </View>
              
            </View>
          );
        }}
        keyExtractor={item => item._id}
      />
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
  text: {
    color: "#ffffff",
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
    color: '#434343'
  },
  button: {
    height: '100%',
  }
});

export default App;
