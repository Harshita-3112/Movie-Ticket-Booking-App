import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';

const CategoryHeader = ({title}) => {
  return <Text style={styles.text}>{title}</Text>;
};

export default CategoryHeader;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.white,
    // paddingHorizontal: SPACING.space_18,
    paddingVertical: SPACING.space_28,
    // backgroundColor: 'red',
  },
});
