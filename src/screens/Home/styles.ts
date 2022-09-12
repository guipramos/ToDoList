import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingBottom: 60,
        paddingTop: 40
    },
    campoInput: {
        width: "100%",
        flexDirection: "row",
        paddingLeft: 24,
        marginTop: -24,
    },
    input: {
        flex: 1,
        height: 54,
        fontSize: 16,
        backgroundColor: "#262626",
        borderRadius: 6,
        marginRight: 4,
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: "#0D0D0D",
        color: '#F2F2F2'
    },
    botao: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24,
    },
    listEmpty: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        marginTop: 48,
        marginBottom: 16,
    },
    containerConteudo: {
        borderWidth: 1,
        borderColor: "#333333",
        marginBottom: 20
    },  
    textListEmpty: {
        color: "#808080",
    },
    flexContent: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 33,
        paddingBottom: 22,
        marginStart: 24,
        marginEnd: 24,
    },
});