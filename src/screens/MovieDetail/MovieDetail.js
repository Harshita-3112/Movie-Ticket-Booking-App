import { ActivityIndicator, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SPACING } from '../../theme/theme';
import { baseImagePath, movieCastDetails, movieDetails } from '../../api/apiCalls';
import AppHeader from '../../components/AppHeader/AppHeader';
import LinearGradient from 'react-native-linear-gradient';

const getMovieDetails = async (movieid) => {
  // console.log(movieDetails(movieid));
  try {
    let res = await fetch(movieDetails(movieid));
    let json = await res.json();
    return json;
  } catch (error) {
    console.log("something went wrong in getMovieDetails function", error);
  }
};

const getMovieCastDetails = async (movieid) => {
  try {
    let res = await fetch(movieCastDetails(movieid));
    let json = await res.json();
    return json;
  } catch (error) {
    console.log("something went wrong in getMovieCastDetails function", error);
  }
};

const MovieDetail = ({ navigation, route, item, index }) => {
  const [movieData, setMovieData] = useState(null);
  const [movieCastData, setMovieCastData] = useState(null);

  useEffect(() => {
    getMovieDetail();
    getMovieCastDetail()

  }, [route.params.movieid]);


  const getMovieDetail = async () => {
    const tempMovieData = await getMovieDetails(route.params.movieid);
    setMovieData(tempMovieData);
  }
  const getMovieCastDetail = async () => {
    const tempMovieCastData = await getMovieCastDetails(route.params.movieid);
    setMovieCastData(tempMovieCastData);
  }

  if (
    movieData == null ||
    movieCastData == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.ScrollViewContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}

      showsVerticalScrollIndicator={false}
    >
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={{ uri: baseImagePath('w780', movieData?.backdrop_path) }}
          style={styles.imageBG}
        >


        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  ScrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_18,
    marginTop: SPACING.space_20
  },
  imageBG: {
    width: '100%'
  },

});
