import axios, { AxiosInstance } from "axios";

export default class HttpClient {

    public http: AxiosInstance;

    constructor(private path: string) {

        this.http = axios.create({ baseURL: '/api/' + this.path });

        this.http.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {

            alert("Ha ocurrido un error al momento de hacer la petición");
            
            return Promise.reject(error);
        });
        
        // Add a response interceptor
        this.http.interceptors.response.use(function (response) {

            return response;
        }, function (error) {

            if(error.response)
                alert("Ha ocurrido un error proviniente del servidor");
            else
                alert("Hubo un error desconocido al momento de completar la solicitud");

            return Promise.reject(error);
        });
    }
}
