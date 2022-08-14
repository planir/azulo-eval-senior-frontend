<template>
    <v-container style="max-width: 1280px">
        <p class="text-h4 font-weight-bold mt-10">{{ getText('welcome') }}</p>

        <div class="d-flex mt-10" style="grid-gap: 20px">

            <CreatorForm />

            <v-card class="d-none d-lg-flex flex-grow-1 home-card pa-10" image="/assets/b7d4ff3a-1e53-4281-91cd-ed23867bde53.jpg">
                <p class="text-h5 mt-auto font-weight-bold" style="color: white">{{ getText('description') }}</p>
            </v-card>
        </div>

        <v-card class="mt-10 d-flex flex-column flex-lg-row home-card pa-8 align-center" color="primary">

            <p class="text-h5 font-weight-bold mr-12" style="color: white">
                {{ getText('my_books') }} ({{select.length}})
            </p>

            <v-text-field
                style="width: 100%"
                class="mt-3 mt-lg-0"
                v-model="filterText"
                variant="solo"
                prepend-inner-icon="mdi-magnify"
                hide-details
                color="primary"
                label="Filtrar por nombre o localización"
                required
            />
            
        </v-card>

        <div class="b-container my-10">
            
            <div class="d-flex align-center justify-center" v-if="!filteredBooks.length">
                <img src="/assets/ddbe6dff-1d9f-4694-a393-067ab1ac6c5d.svg" width="100"/>
                <h1 class="ml-6 mt-2">{{ getText('not_found_books') }}</h1>
            </div>

            <v-row style="width: 100%">
                <v-col
                    v-for="book in filteredBooks"
                    :key="book.slug"
                    cols="12"
                    sm="4"
                    xs="12"
                >
                    <Book :data="book" @selected="toggleSelectBook(book)"/>
                </v-col>
            </v-row>
        </div>

        <div class="fixed-button d-flex">
        <v-btn class="text-surface mr-3" @click="deleteBooksSelected" :disabled="!select.length" icon="mdi-delete" size="large" color="red"/>
        <CreatorModal />
        </div>
    </v-container>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { IBook, useBooksStore } from '../store/books.store';
import CreatorForm from '../components/CreatorForm.vue';
import { useLangStore } from '../store/lang.store';

const select     = reactive<IBook[]>([]);
const filterText = ref("");

const { 
    data: books, 
    deleteBook
} = useBooksStore();

const { getText } = useLangStore();

const filteredBooks = computed(() => books.filter(
    book => book.location?.includes(filterText.value) || book.name.includes(filterText.value))
)

const toggleSelectBook = (book: IBook) => {

    const bookIndex = select.findIndex(b => b.slug === book.slug);

    if(bookIndex > -1)
       return select.splice(bookIndex, 1);

    select.push(book);
        
}

const deleteBooksSelected = () => {

    for (const book of select)
        deleteBook(book.slug);

    select.splice(0, select.length);

}
</script>

<style lang="scss">
.home-card {
    box-shadow: rgba(50, 50, 93, 0.15) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px !important;
}

.b-container {
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(100px, 100%));
    gap: 8px;
}

.fixed-button {
    position: fixed; 
    bottom: 13px;
    right: 13px;
}
</style>