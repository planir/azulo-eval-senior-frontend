import { createApp } from 'vue'
import DefaultLayout from './layouts/default.layout.vue'
import vuetify from './plugins/vuetify'
import router from "./plugins/router";
import { loadFonts } from './plugins/webfontloader'
import { pinia } from './plugins/store';

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { useBooksStore } from './store/books.store';
import { useLangStore } from './store/lang.store';

loadFonts()

createApp(DefaultLayout)
	.use(vuetify)
	.use(router)
	.use(pinia)
	.component('QuillEditor', QuillEditor)
	.mount('#app');

useBooksStore();
useLangStore();