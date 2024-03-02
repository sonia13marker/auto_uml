import { useState, useEffect } from 'react';
import axios from 'axios';

const useServerData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [url]);

  return data;
};

export default useServerData;
