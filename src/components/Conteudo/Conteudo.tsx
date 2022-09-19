import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import Trash from '../../assets/trash.svg';
import CheckBox from '@react-native-community/checkbox';

type Props = {
    texto: string;
    onRemove: () => void;
}

export function Conteudo({texto, onRemove}: Props){
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    
    return (
        <View style={styles.boxContent}>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={[styles.checkFalse, toggleCheckBox ? styles.checkFalse : styles.checkTrue]}>
                {texto}
            </Text>
            <TouchableOpacity 
                style={styles.trash}
                onPress={onRemove}
            >
                <Trash width={40} height={40} />
            </TouchableOpacity >
        </View>
    );
}