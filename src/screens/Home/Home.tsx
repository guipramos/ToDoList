import React, {useState} from 'react';
import {
    View, 
    Text,
    TextInput, 
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import { styles } from './styles';
import Logo from "../../assets/logo.svg";
import Plus from "../../assets/plus.svg";
import Clipboard from "../../assets/clipboard.svg";
import { TabCriada } from '../../components/TabCriada/TabCriada';
import { Conteudo } from '../../components/Conteudo/Conteudo';
import { TabConcluida } from '../../components/TabConcluida/TabConcluida';

const lista = [
    "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    "Integer urna interdum massa libero auctor neque turpis turpis sdfsdfsdfs.",
    "Integer urna interdum massa libero auctor neque turpis turpis 2342432.",
]

export function Home(){
    const [tarefa, setTarefa] = useState<string[]>([]);
    const [itemTarefa, setItemTarefa] = useState('');

    function handleAddList(){
        setTarefa(prevState => [...prevState, itemTarefa]);
        setItemTarefa('')
    }

    function handleListDelete(item: string){
        Alert.alert(
            "Remover", `Deseja deletar o item '${item}'?`, [
                {
                    text: 'Sim',
                    onPress: () => setTarefa(prevState => prevState.filter(tarefa => tarefa !== item))
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }

    return (
        <View style={{backgroundColor: "#191919", flex: 1}}>
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.campoInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setItemTarefa}
                    value={itemTarefa}
                />
                <TouchableOpacity  
                    style={styles.botao}
                    onPress={handleAddList}
                >
                    <Plus />
                </TouchableOpacity >
            </View>

            <View style={styles.flexContent}>
                <TabCriada qtdCriada={tarefa.length} />
                <TabConcluida />
            </View>
            
            <View style={{marginStart: 24, marginEnd: 24}}>
                <View style={styles.containerConteudo}></View>
                <FlatList 
                    data={tarefa}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Conteudo texto={item} onRemove={() => handleListDelete(item)} />
                    )}
                    ListEmptyComponent={
                        <View style={styles.listEmpty}>
                            <Clipboard style={styles.imagem} />
                            <Text style={[styles.textListEmpty, {fontWeight: 'bold'}]}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.textListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    }
                />
            </View>
        </View>

    );
}