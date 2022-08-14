<template>
    <div class="d-flex flex-column">
		<h3 class="mb-6">{{ getText('featured_photo') }}</h3>

		<ImagesContainer>
			<LocationImage :image="data.image" />
		</ImagesContainer>

		<h3 class="mt-8 mb-6">{{ getText('linked_photos') }} 
			<ImageCreatorForm @create="insertImage">

				<template #default=" { openDialog }">
					<a @click="openDialog" style="cursor: pointer" class="text-primary ml-5">{{ getText('add') }}</a>
				</template>
			</ImageCreatorForm>
		</h3>

		<ImagesContainer>
			<LocationImage :image="image" v-for="image in data.images" enable-delete @delete="removeImage" />
		</ImagesContainer>
	</div>
</template>

<script lang="ts" setup>
import { IBook, IBookImage } from '../../store/books.store';
import { useLangStore } from '../../store/lang.store';
import ImageCreatorForm from '../Images/ImageCreatorForm.vue';

interface Props {
    data: IBook
}

const props = defineProps<Props>();
const { getText } = useLangStore();

const insertImage = (image: IBookImage) => {
	props.data.images.unshift(image);
}

const removeImage = (image: IBookImage) => {
	props.data.images = props.data.images.filter(img => img.id !== image.id)
}
</script>