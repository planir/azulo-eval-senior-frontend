<template>

    <component
        v-model="fieldValue"
        v-bind="$attrs"
        :is="dynamicComponent"
        :id="name"
        :rules="customRules"
        :name="name"
        :placeholder="placeholder"
        :type="type"
    />
</template>

<script lang="ts" setup>
import { computed, PropType, ref, watch} from "vue";
import MapAutoCompleteVue from "./Inputs/MapAutoComplete.vue";
import TextFieldVue from "./Inputs/TextField.vue";
import { AllowedRules } from "./../factories/form-field";
import { FormRules } from "./../config/rules.config";
import QuillEditorVue from "./Inputs/QuillEditor.vue";
import ImagePickerVue from "./Inputs/ImagePicker.vue";

    const FieldPossibleComponents = {
        default: TextFieldVue,
        placesAutoComplete: MapAutoCompleteVue,
        QuillEditor: QuillEditorVue,
        image: ImagePickerVue
    }

    const emit  = defineEmits(['input']);

    const props = defineProps({
        name: {
            required: true,
            type: String,
        },
        disableValidationOnChange: {
            default: false,
            type: Boolean
        },

        value: {
            default: null,
            type: [String, Array, Number, Boolean, Object],
        },

        label: {
            default: null,
            type: String,
        },
        placeholder: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: null,
        },
        element: {
            type: String as PropType<keyof typeof FieldPossibleComponents>,
            default: 'default',
        },
        rules: {
            type: Array as PropType<AllowedRules[]>,
            default: [],
        },
        length: {
            type: Number,
            default: null,
        },
    });

    const fieldValue = ref(props.value);
    const customRules = props.rules.reduce((arr: any[], key) => {
        arr.push(FormRules[key]);
        return arr;
    }, []);
    const dynamicComponent = computed(() => FieldPossibleComponents[props.element]);

    watch(fieldValue, (value) => emit('input', value));
    watch(() => props.value, (value) => fieldValue.value = value);

</script>
