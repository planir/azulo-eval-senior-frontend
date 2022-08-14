<template>
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ props }">
            <slot :openDialog="() => dialog = true"/>
        </template>

        <v-card width="440" class="home-card py-6 px-12">
            <p class="text-h5 font-weight-bold">🖼️<span class="ml-5">{{ getText('create_image') }}</span></p>

            <FormBuilder 
                v-model="image" 
                :fields="ModifyBookImage" 
                @submit="submit" 
            />
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { uniqid } from '../../helpers/uniqid';
import { IBookImage } from '../../store/books.store';
import { useLangStore } from '../../store/lang.store';
import { ModifyBookImage } from "./../../config/forms.config";

const emit = defineEmits(["create"]);
const { getText } = useLangStore();
const image = reactive<IBookImage>({
    id: uniqid(),
    path: '',
    location: '',
    caption: ''
})

const dialog = ref(false);

const submit = () => {
    emit("create", {...image});
    dialog.value = false;

    image.id = uniqid();
    image.path = "";
    image.location = "";
    image.caption = "";
}

</script>