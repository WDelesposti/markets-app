import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import moment from 'moment';

const API_URL = process.env.API_URL || 'http://localhost:3000';

const Search = () => {
  const [products, setProducts] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>([]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = async () => {
    const product = products.find(
      (product: any) => product.name === searchTerm
    );
    const apiUrl = `${API_URL}/price/${product.id}`;
    const response = await axios.get(apiUrl);
    const prices = response.data.map((price: any) => {
      return {
        price: price.price,
        date: moment(price.date).format('DD/MM/YYYY'),
      };
    });
    if (prices.length === 0) {
      alert('Nenhum resultado encontrado.');
      return;
    }
    const minPrice = Math.min(
      ...prices.map((price: any) => price.price)
    ).toFixed(2);

    const maxPrice = Math.max(
      ...prices.map((price: any) => price.price)
    ).toFixed(2);

    const averagePrice = (
      prices.reduce((acc: number, price: any) => {
        return acc + price.price;
      }, 0) / prices.length
    ).toFixed(2);

    const newestPrice = prices
      .reduce((acc: any, price: any) => {
        return moment(acc.date).isAfter(moment(price.date)) ? acc : price;
      }, prices[0])
      

    setSearchResults([minPrice, maxPrice, averagePrice, newestPrice]);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/product`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
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
        Busca de Preço
      </Text>
      <input
        type="text"
        placeholder="Escreva aqui..."
        value={searchTerm}
        onChange={handleSearchChange}
        list="resultsList"
        style={{
          fontSize: 24,
          marginTop: 16,
          margin: 16,
        }}
      />
      <Button title="Search" onPress={handleSubmit} color={'#000'} />

      <datalist id="resultsList">
        {products.map((result: any, index: React.Key | null | undefined) => (
          <option key={index} value={result.name}>
            {result.brand}
          </option>
        ))}
      </datalist>

      {searchResults.length > 0 && (
        <View
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: '#f0f0f0',
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            Preço mínimo: R$ {searchResults[0]}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            Preço máximo: R$ {searchResults[1]}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            Preço médio: R$ {searchResults[2]}
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            Preço mais recente: R$ {searchResults[3].price.toFixed(2)} (
            {searchResults[3].date})
          </Text>
        </View>
      )}
    </View>
  );
};

export default Search;
