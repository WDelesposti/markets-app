import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

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
    const apiUrl = `http://0.0.0.0:3000/price/${product.id}`;
    const response = await axios.get(apiUrl);
    const prices = response.data.map((price: any) => price.price);
    if (prices.length === 0) {
      alert('Nenhum resultado encontrado.');
      return;
    }
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const averagePrice = prices.reduce((a: number, b: number) => a + b) / prices.length;
    setSearchResults([minPrice, maxPrice, averagePrice]);
  };

  useEffect(() => {
    axios
      .get('http://0.0.0.0:3000/product')
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
        <div>
            <p>Preço mínimo: {searchResults[0]}</p>
            <p>Preço máximo: {searchResults[1]}</p>
            <p>Preço médio: {searchResults[2]}</p>
        </div>
      )}
    </View>
  );
};

export default Search;
