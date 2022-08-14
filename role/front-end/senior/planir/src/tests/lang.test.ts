import { setActivePinia, createPinia } from 'pinia'
import {  beforeEach, describe, expect, it } from 'vitest'
import { useLangStore } from '../store/lang.store'

describe('Lang Store', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('Verificar funcionamiento de lang', () => {

        const { getText } = useLangStore();

        expect(getText('add')).toBe('Añadir')
    });
})