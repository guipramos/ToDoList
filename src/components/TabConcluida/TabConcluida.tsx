import React from 'react';
import {
    View, 
    TouchableOpacity, 
    Text,
} from 'react-native';
import { styles } from './styles';

export function TabConcluida(props){
    return(
        <View style={styles.tabBox}>
            <TouchableOpacity>
                <Text style={styles.concluidaText}>Concluídas</Text>
            </TouchableOpacity >
            <View style={styles.contador}>
                <Text>{props.qtdConcluida > 0 ? props.qtdConcluida : 0}</Text>
            </View>
        </View>
    );
}