<template>
    <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" @click="dialog = true" class="text-surface" icon="mdi-plus" size="large" color="primary"/>
        </template>

        <CreatorForm @create="dialog = false"/>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dialog = ref(false);
</script>