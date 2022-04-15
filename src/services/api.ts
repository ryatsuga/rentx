import axios from 'axios';

const api = axios.create({
	timeout: 15 * 1000,
	baseURL: 'http://192.168.0.160:3333',
});

export default api;
