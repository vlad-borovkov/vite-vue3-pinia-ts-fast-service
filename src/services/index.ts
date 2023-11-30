import HttpClient, { IHttpClient } from './HttpClient/index';
import { AxiosInstance } from 'axios';

type CommonServices = {
    http: IHttpClient;
};

export type ServicesType = {
    common: CommonServices;
};

const services = (instance: AxiosInstance): ServicesType => ({
    common: {
        http: new HttpClient(instance),
    },
});

export default services;

