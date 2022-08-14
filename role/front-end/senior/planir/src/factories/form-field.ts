
type FormFieldElements = 'default' | 'placesAutoComplete' | 'QuillEditor' | 'image';

export type AllowedRules = keyof typeof import("./../config/rules.config").FormRules;

export interface IFormField {
    label?: string
    placeholder?: string
    value?: string
    type?: string
    rules?: AllowedRules[],
    element?: FormFieldElements
    name?: string
    props?: any,
}

export const FormField = ({
    label = String(),
    placeholder = String(),
    value = String(),
    type = 'text',
    rules = [],
    element = 'default',
    name = String(),
    props = {} as any,
}: IFormField = {}) => {

    const object = { placeholder, label, type, value, rules, element, name, props }

    const withName = (name: string) => FormField({ ...object, name })
    const withValue = (value: string) => FormField({ ...object, value })
    const withPlaceholder = (placeholder: string) => FormField({ ...object, placeholder })
    const withLabel = (label: string) => FormField({ ...object, label })
    const withType = (type: string) => FormField({ ...object, type })
    const withElement = (element: FormFieldElements) => FormField({ ...object, element })
    const withRules = (rules: AllowedRules[]) => FormField({ ...object, rules })
    const withProps = <T = any>(props: T) => FormField({ ...object, props })

    return {
        ...object,
        withName,
        withPlaceholder,
        withLabel,
        withType,
        withElement,
        withRules,
        withValue,
        withProps,
    }
}
