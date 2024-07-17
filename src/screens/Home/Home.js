import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { scale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MovieCard from '../../components/MovieCard/MovieCard';
import { COLORS, SPACING } from '../../theme/theme';
import {
  upcomingMovies,
  nowPlayingMovies,
  baseImagePath,
  popularMovies,
} from '../../api/apiCalls';
import InputHeader from '../../components/InputHeader';
import { useNavigation } from '@react-navigation/native';
import CategoryHeader from '../../components/CategoryHeader';
import SubMovieCard from '../../components/SubMovieCard';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const Home = ({ }) => {
  const navigation = useNavigation();

  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState([]);
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/post');
    const data = await res.json();
    console.log('data', data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    console.log('called');
    try {
      console.log('called1');
      const res = await axios(nowPlayingMovies);
      console.log('called3');
      console.log('res', res);
    } catch (error) {
      console.log('Error in fetchin movie', error);
    }
  };

  const renderUpcomingMoviesDataList = ({ item, index }) => {
    return (
      <SubMovieCard
        title={item.original_title}
        imagePath={baseImagePath('w342', item.poster_path)}
        shouldMarinatedAtEnd={true}
        cardFunction={() => {
          navigation.navigate('MovieDetail', { item: item });
        }}
        cardWidth={width / 3}
        isFirst={index == 0}
        isLast={index == upcomingMoviesList?.length - 1}
      />
    );
  };

  const renderPopularMoviesList = ({ item, index }) => {
    return (
      <SubMovieCard
        title={item.original_title}
        imagePath={baseImagePath('w342', item.poster_path)}
        shouldMarinatedAtEnd={true}
        cardFunction={() => {
          navigation.navigate('MovieDetail', { item: item });
        }}
        cardWidth={width / 3}
        isFirst={index == 0}
        isLast={index == popularMoviesList?.length - 1}
      />
    );
  };

  const renderNowPlayingMoviesList = ({ item, index }) => {
    return (
      <MovieCard
        title={item.original_title}
        imagePath={baseImagePath('w780', item.poster_path)}
        shouldMarinatedAtEnd={true}
        cardFunction={() => {
          navigation.navigate('MovieDetail', { item: item });
        }}
        cardWidth={width * 0.7}
        isFirst={index == 0}
        isLast={index == nowPlayingMoviesList?.length - 1}
        genre={item.genre_ids}
        vote_average={item.vote_average}
        vote_count={item.vote_count}
      />
    );
  };

  useEffect(() => {
    handleOnMount();
  }, []);

  const handleOnMount = async () => {
    await Promise.all([
      getNowPlayingMoviesList(),
      getUpcomingMoviesList(),
      getPopularMoviesList(),
    ]);
    setLoading(false);
  };

  const getNowPlayingMoviesList = async () => {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=91c53fd738d25a5a1d67762b9291ae72',
      );
      const data = await res.json();
      console.log('res', res);
      setNowPlayingMoviesList(data.results);
    } catch (error) {
      console.log('Error fetching now playing movies:', error);
    }
  };

  const getUpcomingMoviesList = async () => {
    try {
      const res = await fetch(upcomingMovies);
      const data = await res.json();

      setUpcomingMoviesList(data.results);
    } catch (error) {
      // console.log('Error fetching upcoming movies:', error);
    }
  };

  const getPopularMoviesList = async () => {
    try {
      const res = await fetch(popularMovies);
      const data = await res.json();
      setPopularMoviesList(data.results);
    } catch (error) {
      // console.log('Error fetching popular movies:', error);
    }
  };

  const searchMoviesFunction = () => {
    navigation.navigate('MovieDetail');
  };

  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size={'large'} color={COLORS.orange} />
  //     </View>
  //   );
  // }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.ScrollViewContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.black} />

      <View style={styles.inputHeaderContainer}>
        <InputHeader onPress={searchMoviesFunction} />
      </View>

      <CategoryHeader title={'Now Playing'} />
      {/*  may need to add FlatList for nowPlayingMoviesList here */}
      <FlatList
        data={nowPlayingMoviesList}
        bounce={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={renderNowPlayingMoviesList}
      />

      <CategoryHeader title={'Popular'} />
      <FlatList
        data={popularMoviesList}
        bounce={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={renderPopularMoviesList}
      />

      <CategoryHeader title={'Upcoming'} />

      <FlatList
        data={upcomingMoviesList}
        bounce={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={renderUpcomingMoviesDataList}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(18),
    backgroundColor: COLORS.black,
  },
  ScrollViewContainer: {},

  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputHeaderContainer: {
    marginTop: SPACING.space_28,
  },
});
