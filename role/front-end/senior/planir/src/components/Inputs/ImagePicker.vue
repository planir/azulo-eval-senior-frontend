<template>
    <v-card :image="(inputValue as string)" height="150px" class="mb-5" style="position: relative">

        <div class="font-weight-bold px-2 text-surface" style="bottom: 0px; right: 0px; position: absolute" v-if="inputValue">
            Presione para cambiar
        </div>

        <div class="d-flex flex-column text-center px-5 align-center justify-center" style="height: 100%; position: absolute" v-else>
            <v-icon size="60px" color="primary">mdi-upload</v-icon>
            <p class="text-subtitle-1 font-weight-bold">Presione para seleccionar una imagen</p>
        </div>

        <input v-bind="$attrs" @change="handleEvent" style="position: absolute; width: 100%; height: 100%; cursor: pointer; opacity: 0; z-index: 99999" type="file">
    </v-card>
</template>

<script lang="ts" setup>
import { useInputProvider } from "./../../providers/input.provider";
import { propsValues } from "./../../config/inputs.config";
import { ref, watch } from "vue";

const getBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {

        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            resolve(reader.result as string);
        };

        reader.onerror = function (error) {
            reject(error);
        };
    })
}


const emit  = defineEmits(["update:modelValue"]);
const props = defineProps(propsValues);

const file = ref<File>();
const { inputValue } = useInputProvider(emit, props);

const handleEvent = async (event: Event) => {

    const target = event.target as HTMLInputElement;
    inputValue.value = await getBase64(target.files![0])
}

</script>

