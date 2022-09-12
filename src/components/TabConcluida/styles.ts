import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    flexContent: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 33,
        paddingBottom: 22,
        marginStart: 24,
        marginEnd: 24,
    },
    tabBox: {
        flexDirection: "row",
    },
    criadaText: {
        color: "#4EA8DE",
        fontSize: 14,
        fontWeight: 'bold'
    },
    concluidaText: {
        color: "#8284FA",
        fontSize: 14,
        fontWeight: 'bold'
    },
    contador: {
        backgroundColor: "#333333",
        width: 25,
        height: 19,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
});