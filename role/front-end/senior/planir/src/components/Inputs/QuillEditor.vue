<template>
    <quill-editor v-model:content="inputValue" v-bind="$attrs" contentType="html" theme="snow" />
</template>

<script lang="ts" setup>
import { useInputProvider } from "./../../providers/input.provider";
import { propsValues } from "./../../config/inputs.config";

const emit  = defineEmits(["update:modelValue"]);
const props = defineProps(propsValues);

const { inputValue } = useInputProvider(emit, props);

</script>