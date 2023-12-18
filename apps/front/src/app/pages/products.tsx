import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const Products = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [measurement, setMeasurement] = useState('');

  const Measurement = ['L', 'ML', 'G', 'MG', 'KG', 'UN', 'PCT', 'CX'];

  const handleSubmit = () => {
    const apiUrl = `http://0.0.0.0:3000/product?name=${name}&brand=${brand}&size=${size}&measurement=${measurement}`;

    axios
      .post(apiUrl)
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
        Criação de Produto
      </Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 16,
          margin: 10,
        }}
      />
      <TextInput
        placeholder="Brand"
        placeholderTextColor="gray"
        value={brand}
        onChangeText={setBrand}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 16,
          margin: 10,
        }}
      />
      <TextInput
        placeholder="Size"
        placeholderTextColor="gray"
        value={size}
        onChangeText={setSize}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 16,
          margin: 10,
        }}
      />
       <Picker
        selectedValue={measurement}
        onValueChange={(itemValue, itemIndex) => setMeasurement(itemValue)}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 16,
          margin: 10,
        }}
      >
        <Picker.Item label="Select a measurement" value="" />
        {Measurement.map((item, index) => {
          return <Picker.Item label={item} value={item} key={index} />;
        })}
      </Picker>


      <Button title="Submit" onPress={handleSubmit} color={'#000'} />
    </View>
  );
};

export default Products;
