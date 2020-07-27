import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 5gzqFv9pTssWLGQFgEAlwiuRlVfmUKXt1bwDfcsVHp6qoLaA4f0caRHv5fgPJl_Rui28fWW6-QKCuRXx5mDSo7KlJgqgb7f-ins-zVYfviysv2Gi2vtTuPE8J5caX3Yx',
  },
});
