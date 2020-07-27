import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setresults] = useState([]);
  const [errorMessage, seterrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setresults(response.data.businesses);
    } catch (err) {
      seterrorMessage('somethngwrong');
    }
  };
  useEffect(() => {
    searchApi('burger');
  }, []);
  return [searchApi, results, errorMessage];
};
