<template>
    <div class="images-container">
        <slot />
    </div>
</template>

<style lang="scss">

    .images-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(360px, 1fr) );
        grid-gap: 10px;
    }
</style>