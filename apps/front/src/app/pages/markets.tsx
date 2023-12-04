import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Markets = () => {
  const [inputValue, setInputValue] = useState('');

  const handlePost = () => {
    const apiUrl = 'http://0.0.0.0:3000/markets';
    const postData = {
      name: inputValue,
    };

    axios
      .post(apiUrl, postData)
      .then(() => {
        alert('Dados enviados com sucesso!');
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          alert('Dados já existentes. Por favor, escolha outro valor.');
        } else {
          alert(
            'Ocorreu um erro ao enviar os dados. Tente novamente mais tarde.'
          );
        }
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 16,
        }}
      >
        Criação de Mercado
      </Text>

      {/* Campo de texto para inserção de string */}
      <TextInput
        placeholder="Digite o nome do mercado que deseja inserir"
        placeholderTextColor="gray"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 16,
          margin: 16,
        }}
      />

      {/* Botão para realizar a inserção */}
      <Button title="Inserir" onPress={handlePost} color={'#000'}></Button>
    </View>
  );
};

export default Markets;
