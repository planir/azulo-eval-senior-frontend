<template>
	<FormBuilder 
		style="max-width: 500px"
		v-model="data.note" 
		:fields="ModifyBookNote"
		hide-submit="true"
	/>
</template>

<script lang="ts" setup>
import { ModifyBookNote } from '../../config/forms.config';
import { IBook } from '../../store/books.store';

interface Props {
    data: IBook
}

const props = defineProps<Props>();
</script>