import { defineStore } from "pinia"
import { useStorage } from '@vueuse/core'
import { LangHTTP } from "../http/lang.client";

export const useLangStore = defineStore('lang', () => {

    const data = useStorage<{name: string, value: string}[]>('lang', [{
        name: 'add',
        value: 'Añadir'
    }]);
    
    // Cargar data del lang
    if(!Object.keys(data.value).length)
        LangHTTP
            .getData()
            .then(langs => data.value = langs);

    const getText = (key: string) => data.value.find(prop => prop.name === key)?.value || "";

    return {
        getText
    }
})