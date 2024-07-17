import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SPACING } from '../../theme/theme';
import InputHeader from '../../components/InputHeader';
import { baseImagePath, searchMovies } from '../../api/apiCalls';
import SubMovieCard from '../../components/SubMovieCard';

const { width, height } = Dimensions.get('screen');
const Search = () => {
  const [searchList, setSearchList] = useState([]);

  const renderSearchList = ({ item, index }) => {
    <SubMovieCard
      title={item.original_title}
      imagePath={baseImagePath('w342', item.poster_path)}
      shouldMarinatedAtEnd={false}
      shouldMarginatedAround={true}
      cardFunction={() => {
        navigation.navigate('MovieDetail', { movieid: item.id });
      }}
      cardWidth={width / 2 - SPACING.space_12 * 2}
    />;
  };

  const searchMoviesFunction = async name => {
    try {
      const res = await fetch(searchMovies(name));
      const json = await res.json();

      console.log('json', json);
      setSearchList(json.results);
    } catch (error) {
      console.log('Something went wrong in searchMoviesFunction');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={searchList}
        bounce={false}
        numcolumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerContainer}
        renderItem={renderSearchList}
        ListHeaderComponent={
          <View>
            <InputHeader
              searchFunction={searchMoviesFunction}
              style={styles.inputHeaderContainer}
            />
          </View>
        }
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  inputHeaderContainer: {
    marginTop: SPACING.space_28,
    marginHorizontal: SPACING.space_36,
  },
  centerContainer: {
    alignItems: 'center',
  },
});
