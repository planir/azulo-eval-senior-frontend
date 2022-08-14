import { ExtractPropTypes, ref, watch } from "vue";
import { propsValues } from "../config/inputs.config";

export const useInputProvider = (
    emit: (event: "update:modelValue", ...args: any[]) => void,
    props: Readonly<ExtractPropTypes<typeof propsValues>>
) => {

    const inputValue = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => inputValue.value = newValue);
    watch(inputValue, (newValue) => emit('update:modelValue', newValue));

    return {
        inputValue
    }
}