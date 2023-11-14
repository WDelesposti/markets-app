import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FrontendComponent() {
  const [data, setData] = useState<Array<any> | null>(null);

  useEffect(() => {
    async function fetchDataFromBackend() {
      try {
        const response = await axios.get('http://192.168.0.123:3000/markets');
        if (response) {
          setData(response.data);
        } else {
          console.error('Error fetching data:', response);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchDataFromBackend();
  }, []);

  return (
    <div>
      {data ? (
        <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
          </div>
        ))}
      </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default FrontendComponent;
