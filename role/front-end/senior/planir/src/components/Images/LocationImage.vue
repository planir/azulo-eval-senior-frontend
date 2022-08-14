<template>
    <v-card class="d-flex flex-column" style="height: 300px">

        <v-img class="flex-grow-1" cover style="position: relative" height="240px" max-height="240px" :src="image.path" alt="">

            <ImageEditorForm :image="image">
                <template #default="{ openDialog }">
                    <v-tooltip location="top">
                        <template v-slot:activator="{ props }">
                            <div @click="openDialog()" v-bind="props" class="d-flex align-center px-3" style="position: absolute; bottom: 10px; right: 10px">
                                <v-btn size="x-small" icon="mdi-map-marker" />
                                <span class="ml-3 text-surface font-weight-medium">{{ image.location }}</span>
                            </div>
                        </template>

                        <span>Presiona para cambiar ubicación</span>
                    </v-tooltip>
                </template>
            </ImageEditorForm>
        </v-img>
        
        <div class="d-flex align-start pa-4" style="width: 100%">
            <p class="text-h6 mr-2">
                {{ image.caption }}
            </p>

            <v-btn @click="$emit('delete', image)" class="elevation-0 ml-auto" size="x-small" style="color: white" icon="mdi-delete" color="red"/>
            <ImageEditorForm :image="image" />
        </div>
    </v-card>
</template>

<script lang="ts" setup>
import { IBookImage } from "./../../store/books.store";

interface Props {
    image: IBookImage
}

defineProps<Props>();
</script>