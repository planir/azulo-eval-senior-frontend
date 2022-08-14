<template>
    <v-card :to="'/libreta/' + data.slug" width="100%">
        <v-img
            width="100%"
            cover
            height="300px"
            :src="data.image.path"
        />
        <div class="d-flex flex-column pl-4 py-4">
            <h3 class="d-flex align-center" @click.stop>
                <v-checkbox
                    style="max-width: 40px"
                    v-model="check"
                    color="primary"
                    dense
                    hide-details
                    @input="$emit('selected')"
                />
                <span>{{ data.name }}</span>
            </h3>
            <p>
                <v-icon color="grey" class="mb-1" size="x-small">mdi-map-marker</v-icon>
                <span style="color: grey" class="ml-2">{{ data.location }}</span>
            </p>
        </div>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IBook } from "./../store/books.store";

interface Props {
    data: IBook
}

const check = ref(false);

defineProps<Props>();
</script>