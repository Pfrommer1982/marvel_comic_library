<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  text?: string;
}>();

const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
const currentIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    if (currentIndex.value < letters.length) {
      currentIndex.value += 1;
    }
  }, 100);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center p-4 pt-16 w-full h-full scale-[0.7] md:scale-[1]">
    <div v-if="text" class="mb-4">
      {{ text }}
    </div>
    <div class="text-center w-full h-full my-28 scale-[1.6]">
      <div class="flex flex-col justify-center items-center h-full w-full leading-10">
        <h1 class="logo-shadow textlogo-shadow mt-8 text-6xl uppercase pl-1 pr-4 bg-red-600 text-white tracking-[-10px] font-bold border">
          <span
            v-for="(letter, index) in letters"
            :key="index"
            :class="{ 'loader': currentIndex >= index, 'hidden': currentIndex < index, 'text-white': currentIndex === index }"
          >
            {{ letter }}
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: -2px 4px 10px rgba(1, 1, 1, 1);
}

.textlogo-shadow {
  text-shadow: -2px 4px 8px rgba(1, 1, 1, 0.5);
}

.logo-shadow {
  box-shadow:  -2px 4px 8px rgba(1, 1, 1, 0.7);
}

</style>