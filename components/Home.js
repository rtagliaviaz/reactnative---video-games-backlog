import React from 'react'
import { Link } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Link to={{ screen: 'Backlog' }} style={styles.link}>
        Backlog
      </Link>
      <Link to={{ screen: 'Search' }} style={styles.link}>
        Search
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%',
    marginTop: 660,
    padding: 10
    // justifyContent: 'space-between'
  },
  link: {
    color: '#fff',
    
  }
})

export default Home
