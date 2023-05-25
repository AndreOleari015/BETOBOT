import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import { Colors } from '../../themes/Colors';


const UserPicture = () => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/beto.png")} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 42,
        height: 42,
        alignItems: "center",
        borderRadius: 100,
        justifyContent: "center",
        backgroundColor: Colors.branco,
    },
    image: {
        width: 32,
        height: 32,
    }
})
export default UserPicture;