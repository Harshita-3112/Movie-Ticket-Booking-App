import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, FONTSIZE, SPACING} from '../../theme/theme';
import {FONTFAMILY} from '../../theme/theme';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {spread} from 'axios';
const genres = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentry',
  18: 'Drama',
  10751: 'family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystry',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const MovieCard = ({
  title,
  imagePath,
  shouldMarinatedAtEnd,
  cardWidth,
  isFirst,
  isLast,
  cardFunction,
  vote_average,
  vote_count,
  genre,
  item,
}) => {
  // console.log('imagePath', imagePath);
  return (
    <TouchableOpacity onPress={cardFunction}>
      <View
        style={[
          styles.container,
          shouldMarinatedAtEnd
            ? isFirst
              ? {marginLeft: SPACING.space_10}
              : isLast
              ? {marginRight: SPACING.space_36}
              : {}
            : {},
          title.shouldMarginatedAround ? {margin: SPACING.space_12} : {},
          {maxWidth: cardWidth},
        ]}>
        <Image
          source={{uri: imagePath}}
          style={[styles.cardImage, {width: cardWidth}]}
        />
        <View>
          <View style={styles.ratingContainer}>
            <AntDesign
              name="star"
              size={FONTSIZE.size_20}
              color={COLORS.yellow}
            />
            <Text style={styles.voteText}>
              {vote_average} ({vote_count})
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.textTitle}>
            {title}
          </Text>
          <View style={styles.genreContainer}>
            {genre.map(item => {
              return (
                <View key={item} style={styles.genreBox}>
                  <Text style={styles.genreText}>{genres[item]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex: 1,
    backgroundColor: COLORS.black,
    // backgroundColor: 'red',
    marginRight: SPACING.space_16,
    width: scale(240),
  },
  cardImage: {
    borderRadius: BORDERRADIUS.radius_20,
    height: 240,
    resizeMode: 'cover',
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.white,
    textAlign: 'center',
    paddingVertical: SPACING.space_10,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.space_10,
  },
  voteText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.white,
  },
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.space_20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genreBox: {
    borderColor: COLORS.whiteRGBA50,
    borderWidth: 1,
    paddingVertical: SPACING.space_4,
    paddingHorizontal: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  genreText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.whiteRGBA75,
  },
});
