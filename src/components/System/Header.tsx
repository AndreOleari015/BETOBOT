import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../themes/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fonts } from '../../themes/Fonts';
import UserPicture from './UserPicture';


const Header = () => {

    return (
        <SafeAreaView style={styles.container}>
            <AntDesign name="left" size={42} color={Colors.branco} />
            <View style={styles.userInfContainer}>
                <UserPicture />
                <Text style={styles.botNameLabel}>BETO</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 90,
        alignItems: "center",
        paddingHorizontal: 20,
        marginHorizontal: -20,
        backgroundColor: Colors.verde1,
        flexDirection: "row",
    },
    userInfContainer: {
        marginLeft: 5,
        alignItems: "center",
        flexDirection: "row",
    },
    botNameLabel: {
        color: Colors.branco,
        fontSize: 21,
        fontFamily: Fonts.InterBold,
        marginLeft: 10,
    }
})
export default Header;