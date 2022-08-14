<template>
    <v-form
        ref="form"
        class="mt-6"
        lazy-validation
    >
        <div 
            class="d-flex flex-column" 
            v-for="(field, index) in fields"
            :key="index"
        >
            <p class="mb-2 text-subtitle-2 font-weight-medium" style="color: #5a5a5a;">{{ getText(field.label!) || field.label }}</p>

            <FieldBuilder
                :name="field.name"
                :value="modelValue[field.name!]"
                :label="field.label"
                :placeholder="field.placeholder"
                :type="field.type"
                :element="field.element"
                :rules="field.rules"
                v-bind="field.props"
                @input="(value: string) => handleFormFieldChange(field.name!, value)"
            />
        </div>

        <slot name="submitter">
            <v-btn
                v-if="!hideSubmit"
                color="primary"
                class="mr-4"
                size="large"
                elevation="0"
                @click="submit"
            >
                <p style="color: white">Guardar</p>
            </v-btn>
        </slot>

    </v-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IFormField } from '../factories/form-field';
import { useLangStore } from '../store/lang.store';

interface FormValues {
    [x: string]: string
}

interface Props {
    fields: IFormField[],
    modelValue: FormValues
    hideSubmit: Boolean
}

const emit  = defineEmits(['update:modelValue', 'submit']);
const props = defineProps<Props>();
const form  = ref();

const { getText } = useLangStore();

const handleFormFieldChange = (name: string, value: any) => {
    // Update reactive prop.
    props.modelValue[name] = value;
}

const submit = async () => {

    const validation = await form.value.validate();

    if(validation.valid)
        emit("submit");
}

</script>
