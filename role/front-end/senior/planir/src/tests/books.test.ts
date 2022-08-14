import { setActivePinia, createPinia } from 'pinia'
import {  beforeEach, describe, expect, it } from 'vitest'
import { useBooksStore } from '../store/books.store'

describe('Books Store', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Opción de crear libros', () => {

        const { addBook, data } = useBooksStore();

        addBook("Mi primer libro", "Madrid Cundinamarca")

        expect(data.length).toBe(1)
    });

    it('Opción de modificar libros', () => {

        const { data, addBook, modifyBook } = useBooksStore();

        addBook("Mi primer libro", "Madrid Cundinamarca")

        modifyBook(data[0].slug, {
            ...data[0],
            name: 'Mi segundo libro'
        });

        expect(data[0].name).toBe('Mi segundo libro')
    });

    it('Opción de eliminar libros', () => {

        const { data, addBook, deleteBook } = useBooksStore();

        addBook("Mi primer libro", "Madrid Cundinamarca")

        deleteBook(data[0].slug);

        expect(data.length).toBe(0)
    });
})