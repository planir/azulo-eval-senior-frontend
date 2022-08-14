<template>
    <v-text-field
        v-model="inputValue"
        variant="outlined"
        v-bind="$attrs"
        autocomplete="new-password"
        :label="placeholder"
        :type="type"
        single-line
        outlined
        dense
    />
</template>

<script lang="ts" setup>
import { useInputProvider } from "./../../providers/input.provider";
import { propsValues } from "./../../config/inputs.config";

const emit  = defineEmits(["update:modelValue"]);
const props = defineProps(propsValues);

const { inputValue } = useInputProvider(emit, props);

</script>

