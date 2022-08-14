<template>
    <v-text-field
        ref="textField"
        v-bind="$attrs"
        v-model="inputValue"
        :label="placeholder"
        autocomplete="new-password"
        single-line
        outlined
        dense
    />
</template>

<script lang="ts" setup>
import { useInputProvider } from "./../../providers/input.provider";
import { propsValues } from "./../../config/inputs.config";
import { onMounted, ref } from "vue";

const emit  = defineEmits(["update:modelValue"]);
const props = defineProps(propsValues);

const { inputValue } = useInputProvider(emit, props);

const textField = ref();

onMounted(() => {
    
    const input = textField.value.$el!.querySelector('input') as HTMLInputElement;

    const autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        let place = autocomplete.getPlace();
        inputValue.value = place.formatted_address!;
    });
})

</script>

<style>

.pac-container {
    z-index: 99999;
}
</style>