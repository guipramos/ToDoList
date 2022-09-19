import React from 'react';
import {
    View, 
    TouchableOpacity, 
    Text
} from 'react-native';
import { styles } from './styles';

export function TabCriada(props){
    return(
        <View style={styles.tabBox}>
            <TouchableOpacity>
                <Text style={styles.criadaText}>Criada(s)</Text>
            </TouchableOpacity >
            <View style={styles.contador}>
                <Text>{props.qtdCriada > 0 ? props.qtdCriada : 0}</Text>
            </View>
        </View>
    );
}