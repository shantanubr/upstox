import {useState, useEffect} from 'react';
import {UserHoldingDataProps} from '../screens/home/components/interfaces';

const useGetHoldingsData = () => {
  const [data, setData] = useState<UserHoldingDataProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
          {
            method: 'GET',
          },
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading, error};
};

export default useGetHoldingsData;
