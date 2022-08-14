<template>
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ props }">
            <slot :openDialog="() => dialog = true">
                <v-btn v-bind="props" @click="dialog = true" class="elevation-0 ml-3" size="x-small" style="color: white" icon="mdi-pencil" color="primary"/>
            </slot>
        </template>

        <v-card width="440" class="home-card py-6 px-12">
            <p class="text-h5 font-weight-bold">🖼️<span class="ml-5">{{ getText('modify_image') }}</span></p>

            <FormBuilder 
                v-model="image" 
                :fields="ModifyBookImage" 
                @submit="dialog = false" 
            />
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IBookImage } from '../../store/books.store';
import { useLangStore } from '../../store/lang.store';
import { ModifyBookImage } from "./../../config/forms.config";

interface Props {
    image: IBookImage
}

defineProps<Props>();

const { getText } = useLangStore();

const dialog = ref(false);

</script>