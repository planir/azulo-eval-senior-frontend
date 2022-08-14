<template>
    <v-container class="pa-2" style="max-width: 1024px">

        <div class="d-flex flex-column align-center my-10">
            <p class="text-h4 font-weight-bold">{{ book!.name }}</p>
            <router-link class="text-h6 font-weight-bold mr-4 text-primary" to="/">Volver</router-link>
        </div>

        <v-timeline :side="$vuetify.display.lgAndUp ? undefined : 'end'" align="center">

        <v-timeline-item
            dot-color="primary"
            size="small"
        >
            <template v-slot:opposite v-if="$vuetify.display.lgAndUp">
                <h3 class="text-blue">{{ getText('location') }}</h3>
            </template>

            <v-alert
                color="blue"
                class="pa-6 text-background"
            >
                <v-icon>mdi-map-marker</v-icon>
                <span class="ml-5">{{ book!.location }}</span>
            </v-alert>
        </v-timeline-item>

        <v-timeline-item
            dot-color="red"
            size="small"
        >

            <template v-slot:opposite  v-if="$vuetify.display.lgAndUp">
                <h3 class="text-red">{{ getText('notes') }}</h3>
            </template>

            <v-alert
                color="red"
                class="mt-8 pa-6 text-background"
            >
                <p class="text-h6 font-weight-black">{{ book!.note.caption }}</p>

                <div v-html="book!.note.content"></div>
            </v-alert>
        </v-timeline-item>

        <v-timeline-item
            dot-color="primary"
            size="small"
        >

            <template v-slot:opposite v-if="$vuetify.display.lgAndUp">
                <h3 class="text-blue">{{ getText('featured_photo')  }}</h3>
            </template>

            <LocationImage :image="book!.image" />
        </v-timeline-item>

        <v-timeline-item
            dot-color="red"
            size="small"
        >

            <template v-slot:opposite v-if="$vuetify.display.lgAndUp">
                <h3 class="text-red">{{ getText('linked_photos') }} </h3>
            </template>

            <v-carousel hide-delimiters style="height: 300px; max-width: 100%">
                <v-carousel-item
                    v-for="image in book!.images"
                    :key="image.path"
                >
                    <LocationImage class="ma-0" :style="{width: $vuetify.display.lgAndUp ? '400px' : '100%'}" style="max-height: 300px" :image="image" />
                </v-carousel-item>
            </v-carousel>
        </v-timeline-item>
    </v-timeline>

    <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" @click="dialog = true" class="fixed-button text-surface" icon="mdi-pencil" size="large" color="primary"/>
        </template>

        <v-card>
            <v-card-title style="color: white !important" class="bg-primary pa-5 elevation-3">
                <v-icon class="mr-3 mb-1" style="cursor: pointer" @click="dialog = false">mdi-close-circle</v-icon>
                <span>{{ getText('modify_book') }}</span>
            </v-card-title>

            <v-card-text class="pa-0">
                <BookEditor :data="book!" @submit="handleSubmit" />
            </v-card-text>
        </v-card>
    </v-dialog>

        
    </v-container>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { IBook, useBooksStore } from '../store/books.store';
import { useRoute, useRouter } from 'vue-router';
import BookEditor from '../components/BookEditor/BookEditor.vue';
import { computed } from '@vue/reactivity';
import { useLangStore } from '../store/lang.store';

const { findBookBySlug, modifyBook } = useBooksStore();
const { getText } = useLangStore();
const { params } = useRoute();
const router = useRouter();

const book = computed(() => findBookBySlug(params.slug as string));

if(!book.value)
    router.push("/");

const dialog = ref(false);

const handleSubmit = (book: IBook) => {
    dialog.value = false;
    modifyBook(params.slug as string, book)
}

</script>

<style lang="scss">

</style>