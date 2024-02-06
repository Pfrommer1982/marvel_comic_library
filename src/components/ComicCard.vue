<script setup lang="ts">
import type { Comic } from "@/types/marvel";

const props = defineProps<{
    comic: Comic;
}>();

</script>

<template >
    <div class="card glass shadow-xl w-full h-full text-white opacity-90 " :id="`${comic.id}`">
        <figure>
            <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="Character"
                class="w-full h-96 object-cover " />
        </figure>
        <div class="w-full flex flex-col justify-center py-6">
            <p class="flex justify-center">Series: </p>
            <p class="flex justify-center"> {{ comic.series.name }}</p>
        </div>
    </div>
</template>


<style scoped>
.text-shadow {
    text-shadow: -2px 4px 10px rgba(1, 1, 1, 0.5);
}
</style>