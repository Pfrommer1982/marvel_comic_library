<!-- SearchForm.vue -->
<script lang="ts" setup>
import { ref, watch } from "vue";
import type { Ref } from "vue";

const emit = defineEmits(["searchSubmit"]);

interface Props {
    isSearching: boolean;
}

const props = defineProps<Props>();


const query: Ref<string> = ref("");
let timeout: number;

const search = (): void => {
    emit("searchSubmit", query.value);
};

const debouncedSearch = (): void => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
        search();
    }, 500);
};

watch(query, (): void => {
    debouncedSearch();
});
</script>

<template>
    <form class="w-full flex justify-center items-center mb-10">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" 
                class="block w-full py-3 px-60 ps-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none" 
                placeholder="Search Marvel Characters" required v-model="query" :disabled="isSearching" autocomplete="off" />
            <button type="submit" 
                class="text-white absolute end-2.5 bottom-1.5 bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2" 
                :disabled="isSearching">Search
            </button>
        </div>
    </form>
</template>





