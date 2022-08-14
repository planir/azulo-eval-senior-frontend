import { defineStore } from "pinia"
import { useStorage } from '@vueuse/core'
import slugify from "slugify";
import { uniqid } from "../helpers/uniqid";

export interface IBookImage {
    id?: string,
    caption: string
    path: string
    location?: string
}

export interface IBook {
    name: string,
    location?: string,
    slug: string
    image: IBookImage,
    images: IBookImage[],
    note: {
        caption: string,
        content: String
    }
}

export const useBooksStore = defineStore('books', () => {

    const data = useStorage<IBook[]>('books', [])

    const addBook = (name: string, location?: string) => {

        data.value.unshift({
            name,
            slug: slugify(name).toLowerCase(),
            location,
            image: {
                caption: 'Mi primera imagen',
                path: '/assets/afc3c258-0df4-4345-8a63-237132a50973.jpg',
                location
            },
            images: [
                {
                    id: uniqid(),
                    caption: 'Mi primera imagen',
                    path: '/assets/afc3c258-0df4-4345-8a63-237132a50973.jpg',
                    location
                },
                {
                    id: uniqid(),
                    caption: 'Mi segunda imagen',
                    path: '/assets/afc3c258-0df4-4345-8a63-237132a50973.jpg',
                    location
                },{
                    id: uniqid(),
                    caption: 'Mi tercera imagen',
                    path: '/assets/afc3c258-0df4-4345-8a63-237132a50973.jpg',
                    location
                }
            ],
            note: {
                caption: "Mis apuntes del viaje",
                content: "Puedes modificar el contenido modificando la nota"
            }
        });

    }

    const deleteBook = (slug: string) => {
        
        const bookIndex = data.value.findIndex(book => book.slug === slug);

        data.value.splice(bookIndex, 1);
    }

    const modifyBook = (slug: string, newData: IBook) => {
        const bookIndex = data.value.findIndex(book => book.slug === slug);
        data.value[bookIndex] = newData;
    }

    const findBookBySlug = (slug: string) => data.value.find(book => book.slug === slug);

    return {
        data,
        addBook,
        modifyBook,
        deleteBook,
        findBookBySlug
    }
})