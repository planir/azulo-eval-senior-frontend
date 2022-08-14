import HttpClient from "./http";

export const LangHTTP = new class LangClient extends HttpClient {

    constructor() {
        super("lang")
    }

    async getData() {
        
        const { data } = await this.http.get<{ data: {name: string, value: string}[] }>("");

        return data.data;
    }

}