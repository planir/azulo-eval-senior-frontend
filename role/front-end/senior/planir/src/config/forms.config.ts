import { FormField } from "../factories/form-field";
import { useLangStore } from "../store/lang.store";

export const CreateBookForm = [

    FormField()
        .withLabel('book_name')
        .withName('name')
        .withPlaceholder('Ej: Mi viaje en París')
        .withRules(["required"])
        .withProps({
            variant: 'outlined',
            'prepend-inner-icon': "mdi-form-textbox"
        }),

    FormField()
        .withLabel('location')
        .withElement('placesAutoComplete')
        .withName('location')
        .withProps({
            variant: 'outlined',
            'prepend-inner-icon': "mdi-map-marker"
        }),
];

export const ModifyBookNote = [

    FormField()
        .withLabel('note_name')
        .withName('caption')
        .withRules(["required"])
        .withProps({
            variant: 'outlined',
            'prepend-inner-icon': "mdi-form-textbox"
        }),

    FormField()
        .withLabel('note_content')
        .withElement('QuillEditor')
        .withRules(["required"])
        .withPlaceholder('Ej: Lima, Perú')
        .withName('content')
        .withProps({
            style: 'height: 300px'
        })
]

export const ModifyBookImage = [

    FormField()
        .withLabel('Imagen')
        .withPlaceholder('select_name')
        .withElement('image')
        .withName('path')
        .withRules(["required"])
        .withProps({
            accept: "image/*"
        }),

    FormField()
        .withLabel('image_name')
        .withName('caption')
        .withRules(["required"])
        .withProps({
            variant: 'outlined',
            'prepend-inner-icon': "mdi-form-textbox"
        }),

    FormField()
        .withLabel('location')
        .withElement('placesAutoComplete')
        .withRules(["required"])
        .withName('location')
        .withProps({
            variant: 'outlined',
            'prepend-inner-icon': "mdi-map-marker"
        }),
];