import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../Components/ResultsLists';

import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const { term, setTerm } = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const searchByFilteredResults = (price) => {
    // result filter '$' ,'$$','$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={searchByFilteredResults('$')}
          title='Cost Effective'
        />
        <ResultsList
          results={searchByFilteredResults('$$')}
          title='Bit Pricier'
        />
        <ResultsList
          results={searchByFilteredResults('$$$')}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  text: {},
});

export default SearchScreen;
