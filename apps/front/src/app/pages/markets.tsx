import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Markets = () => {
    const [inputValue, setInputValue] = useState('');

    const handlePost = () => {
        // Endpoint de exemplo para post
        const apiUrl = 'http://0.0.0.0:3000/markets';
    
        // Dados a serem enviados no post
        const postData = {
          name: inputValue,
        };
    
        // Realizar o post usando Axios
        axios.post(apiUrl, postData)
          .then((response) => {
            // Lógica a ser executada em caso de sucesso
            alert('Dados enviados com sucesso!');
          })
          .catch((error) => {
            // Verificar se o erro é do tipo 409
            if (error.response && error.response.status === 409) {
                // Exibir um alerta em caso de erro 409
                alert('Dados já existentes. Por favor, escolha outro valor.');
            } else {
                // Exibir um alerta padrão para outros erros
                alert('Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.')
            }
          });
      };
  return (
    <View
    style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }}
    >
      <Text
        style={{
        fontSize: 24,
        fontWeight: 'bold',
        }}
      >Criação de Mercado</Text>
      
      {/* Campo de texto para inserção de string */}
      <TextInput
        placeholder="Digite o nome do mercado que deseja inserir"
        placeholderTextColor='gray'
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={{
            width: '50%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 16,
            marginBottom: 16,
        }}
      />
      
      {/* Botão para realizar a inserção */}
     <Button
        title="Inserir"
        onPress={handlePost}
        color={'#000'}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    });

export default Markets;