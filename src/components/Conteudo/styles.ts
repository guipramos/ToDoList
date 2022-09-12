import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    boxContent: {
        backgroundColor: "#262626",
        marginBottom: 8,
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boxContentText: {
        fontSize: 14,
        color: "#F2F2F2",
        lineHeight: 20,
       
    },
    trash: {
        marginLeft: 8
    },
    checkbox: {
        marginRight: 10
    },
    checkTrue: {
        textDecorationLine: 'none',
        color: '#F2F2F2'
    },
    checkFalse: {
        textDecorationLine: 'line-through',
        color: "#808080",
    },
});