import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme'
import AntDesign from 'react-native-vector-icons/AntDesign'
const AppHeader = ({ name, header, action }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconBG} onPress={() => { action() }} >
                <AntDesign name={name} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.headerText}>
                {header}
            </Text>
            <View style={styles.emptyContainer}>

            </View>
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    iconStyle: {
        color: COLORS.white,
        fontSize: FONTSIZE.size_24,

    },
    headerText: {
        flex: 1,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_20,
        textAlign: 'center',
        color: COLORS.white
    },
    emptyContainer: {
        height: SPACING.space_20 * 2,
        width: SPACING.space_20 * 2
    },
    iconBG: {
        height: SPACING.space_16 * 2,
        width: SPACING.space_16 * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: BORDERRADIUS.radius_20,
        backgroundColor: COLORS.orange
    }
})