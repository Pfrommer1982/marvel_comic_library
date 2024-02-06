<script setup lang="ts">
import { ref } from "vue";
import type { Character } from "../types/marvel";

interface Props {
  character: Character;
}

const props = defineProps<Props >();
const isDescriptionOpen = ref(false);

const toggleDescription = () => {
  isDescriptionOpen.value = !isDescriptionOpen.value;
};
</script>

<template>
  <div class="card glass shadow-xl text-white" :id="`${character.id}`">
    <figure>
      <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="Character"
        class="w-full h-64 object-cover" />
    </figure>
    <div class="p-4">
      <h2 class="card-title">{{ character.name }}</h2>


      <div v-if="character.description">
        <div class="accordion mt-2">
          <div class="accordion-item">
            <h3 class="accordion-title">
              <button type="button" class="flex items-center" @click="toggleDescription">
                <span>Description</span>
                <span :class="{ 'rotate-180': isDescriptionOpen }" class="ml-2 transition-transform">▼</span>
              </button>
            </h3>
            <div class="accordion-content" :class="{ 'hidden': !isDescriptionOpen }">
              <p>{{ character.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="character.stories.available > 0" class="mt-auto -pl-2">
        <h3 class="text-md font-semibold mt-2">Featured in:</h3>
        <div class="flex flex-wrap mt-2">
          <template v-for="(story, index) in character.stories.items.slice(0, 2)" :key="index">
            <span class="tag flex justify-center items-center bg-[#EC1E24] text-white px-2 py-1 m-1 rounded">{{ story.name
            }}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.text-shadow {
  text-shadow: -2px 4px 10px rgba(1, 1, 1, 0.5);
}
</style>
  