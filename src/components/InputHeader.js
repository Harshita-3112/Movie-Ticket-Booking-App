import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BORDERRADIUS, COLORS, SPACING} from '../theme/theme';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InputHeader = ({onPress}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.inputBox}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.textInput}
          placeholder="Search your Movies..."
          placeholderTextColor={COLORS.whiteRGBA32}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={onPress}>
          <AntDesign
            name="search1"
            size={20}
            color={COLORS.orange}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLORS.whiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    flexDirection: 'row',
    display: 'flex',
    height: scale(40),
  },
  textInput: {
    width: '100%',
    height: scale(40),

    display: 'flex',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
