import { useState, useEffect } from 'react';
import axios from 'axios';

const useSendDataToServer = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [url]);

  return data;
};

export default useSendDataToServer;
