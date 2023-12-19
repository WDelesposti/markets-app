import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { formatPrice, maskDate, formatStringToDate } from './utils';

const API_URL = process.env.API_URL || 'http://localhost:3000';

const Prices = () => {
  const [products, setProducts] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [productSelected, setProductSelected] = useState('');
  const [marketSelected, setMarketSelected] = useState('');
  const [maskedDate, setMaskedDate] = useState<string>('');
  const [formattedPrice, setFormattedPrice] = useState<string>('');


  const handleDateInput = (input: string) => {
    const formattedDate = maskDate(input);
    setMaskedDate(formattedDate);
  };

  const handlePriceInput = (input: string) => {
    const formattedFloat = formatPrice(input);
    setFormattedPrice(formattedFloat);
  };

  const handleSubmit = () => {
    const apiUrl = `${API_URL}/price`;
    const postData = {
      productId: Number(productSelected),
      marketId: Number(marketSelected),
      date: formatStringToDate(maskedDate),
      price: Number(formattedPrice),
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
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/product`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));

    axios
      .get(`${API_URL}/markets`)
      .then((response) => setMarkets(response.data))
      .catch((error) => console.error('Error fetching markets:', error));
  }, []);

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
        Criação de Preço
      </Text>
      <Picker
        selectedValue={productSelected}
        onValueChange={(itemValue) => setProductSelected(itemValue)}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        <Picker.Item label="Selecione um produto" value={null} />
        {products.map((produto: any) => (
          <Picker.Item
            key={produto.id.toString()}
            label={produto.name}
            value={produto.id.toString()}
          />
        ))}
      </Picker>

      <Picker
        selectedValue={marketSelected}
        onValueChange={(itemValue) => setMarketSelected(itemValue)}
        style={{
          width: '50%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 16,
          marginBottom: 8,
        }}
      >
        <Picker.Item label="Selecione um mercado" value={null} />
        {markets.map((mercado: any) => (
          <Picker.Item
            key={mercado.id.toString()}
            label={mercado.name}
            value={mercado.id.toString()}
          />
        ))}
      </Picker>

      <TextInput
        placeholder="Insira a data"
        placeholderTextColor="gray"
        value={maskedDate}
        onChangeText={handleDateInput}
        maxLength={10}
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
        placeholder="Insira o preço"
        placeholderTextColor="gray"
        value={formattedPrice}
        onChangeText={handlePriceInput}
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
      <Button title="Submit" onPress={handleSubmit} color={'#000'} />
    </View>
  );
};

export default Prices;
