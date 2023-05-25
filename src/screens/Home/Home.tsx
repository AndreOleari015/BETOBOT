import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native'
import Container from '../../components/System/Container';
import InputDefault from '../../components/Inputs/InputDefault';
import ButtonDefault from '../../components/Pressables/ButtonDefault';
import { Fonts } from '../../themes/Fonts';
import { Colors } from '../../themes/Colors';


const Home = () => {

    return (
        <Container>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../assets/beto.png")} />
                </View>
                <View style={styles.infoAppContainer}>
                    <Text style={styles.appNameLabel}>BETO</Text>
                    <Text style={styles.infoLabel}>Digite seu nome para começar a experiência</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <InputDefault
                        placeholder='Nome...' />
                    <InputDefault
                        placeholder='Sobrenome...' />
                </View>
                <ButtonDefault
                    style={styles.buttonContainer} />
            </ScrollView>
        </Container>
    );
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        width: "100%",
    },
    imageContainer: {
        marginTop: "30%",
        marginBottom: "10%",
        alignItems: "center",
    },
    inputsContainer: {
        gap: 15,
        width: "100%",
        marginBottom: "20%",
    },
    infoAppContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 30,
        justifyContent: "center",
    },
    appNameLabel: {
        color: Colors.verde1,
        fontSize: 36,
        fontFamily: Fonts.InterBlack,
    },
    infoLabel: {
        color: Colors.verde1,
        fontSize: 16,
        flexWrap: "wrap",
        textAlign: "center",
        fontFamily: Fonts.InterBold,
    },
    buttonContainer: {
        alignSelf: "center",
    }
})
export default Home;