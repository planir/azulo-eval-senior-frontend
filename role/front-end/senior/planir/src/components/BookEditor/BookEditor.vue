<template>
	<v-tabs v-model="tab" background-color="primary">
		<v-tab value="one" style="color: white !important">{{getText('general')}}</v-tab>
		<v-tab value="two" style="color: white !important">{{getText('images')}}</v-tab>
		<v-tab value="three" style="color: white !important">{{getText('notes')}}</v-tab>
	</v-tabs>

	<div class="pa-8">
        <EditorTabOne :data="book" v-if="tab === 'one'" />
        <EditorTabTwo :data="book" v-if="tab === 'two'" />
		<EditorTabThree :data="book" v-if="tab === 'three'" />
	</div>

	<v-btn @click="$emit('submit', book)" class="fixed-button text-surface" icon="mdi-content-save" size="large" color="primary"/>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { IBook } from '../../store/books.store';
import { useLangStore } from '../../store/lang.store';

interface Props {
    data: IBook
}

const { getText } = useLangStore();
const props = defineProps<Props>();

const book = reactive({...props.data});
const tab = ref("one");
</script>