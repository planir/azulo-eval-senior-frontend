<template>
    <v-card width="500" class="home-card py-6 px-12">
        <p class="text-h5 font-weight-bold">📚<span class="ml-5">{{ getText('create_book') }}</span></p>

        <FormBuilder 
            v-model="data" 
            :fields="CreateBookForm" 
            @submit="handleSubmit" 
        />
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CreateBookForm } from '../config/forms.config';
import { useBooksStore } from '../store/books.store';
import { useLangStore } from '../store/lang.store';

const { 
    addBook
} = useBooksStore();

const { getText } = useLangStore();
const emit = defineEmits(["create"]);

const data = ref({
    name: '',
    location: ''
});

const handleSubmit = () => {

    addBook(data.value.name, data.value.location);

    data.value = {
        name: '',
        location: ''
    }

    emit("create");
}

</script>