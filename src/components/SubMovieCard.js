import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

const SubMovieCard = ({
  title,
  imagePath,
  shouldMarinatedAtEnd,
  cardWidth,
  isFirst,
  isLast,
  cardFunction,
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
        <Text numberOfLines={1} style={styles.textTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex: 1,
    backgroundColor: COLORS.black,
    // backgroundColor: 'red',
    marginRight: SPACING.space_16,
  },
  cardImage: {
    borderRadius: BORDERRADIUS.radius_20,
    height: 150,
  },
  textTitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.white,
    textAlign: 'center',
    paddingVertical: SPACING.space_10,
  },
});
