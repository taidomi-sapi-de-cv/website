import axios from 'axios';
import qs from 'qs';

const apiClient = axios.create({
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'comma'}),
});

export const fetcher = (url: string, params: any) =>
    apiClient.get(url, {params}).then(response => response.data);

const swrConfig = {fetcher};

export default swrConfig;
