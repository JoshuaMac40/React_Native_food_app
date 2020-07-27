import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [results, setresults] = useState(null);

  const id = navigation.getParam('id');

  //   console.log(id);

  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setresults(response.data);
  };
  useEffect(() => {
    getResults(id);
  }, []);

  if (!results) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>{results.name}</Text>
      <FlatList
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
