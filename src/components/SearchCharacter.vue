<script lang="ts" setup>
import { ref, reactive, computed, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCharacterSearch } from "@/composables/marvelApi";
import type { Character } from "@/types/marvel";
import LoadingIndicator from "./LoadingIndicator.vue";
import CharacterCard from "./CharacterCard.vue";
import Pagination from "./Pagination.vue";
import SearchForm from "./SearchForm.vue";

const router = useRouter();
const route = useRoute();

const searchQuery = ref("");
const isSearching = ref(false);
const data = reactive<Character[]>([]);
const currentPage = computed(() => route.query.page ? parseInt(route.query.page as string) : 0);
const totalPages = ref(0);

const getCharacterSearch = async (query: string, page: number = 0) => {
  try {
    if (query !== "") {
      isSearching.value = true;
      searchQuery.value = query;
      const search = await useCharacterSearch(query, page);

      totalPages.value = Math.ceil(search.total / search.limit);
      data.length = 0; // Clear existing data
      data.push(...search.results);

      isSearching.value = false;
    } else {
      searchReset();
    }
  } catch (e) {
    router.push({ path: '/error', query: { info: e as string } });
  }
};

const searchReset = (): void => {
  searchQuery.value = "";
  totalPages.value = 0;
  data.length = 0;
};

const search = (query: string) => {
  getCharacterSearch(query);
};


watchEffect(() => {
  getCharacterSearch(searchQuery.value, currentPage.value);
});
</script>


<template>
    <div class="m-4">
      <SearchForm :is-searching="isSearching" @search-submit="search" />
      <LoadingIndicator v-if="isSearching" :text="`Searching by '${searchQuery}'...`" />
      <div v-if="data && data.length > 0 && !isSearching">
        <div class="grid grid-flow-row shrink grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-xl">
          <CharacterCard :character="character" :key="character.id" v-for="character in data"></CharacterCard>
        </div>
        <Pagination :total-pages="totalPages" :path="`/search/${searchQuery}/`" :current-page="currentPage">
        </Pagination>
      </div>
      <div v-if="data && data.length === 0 && searchQuery" class="flex flex-col items-center justify-center p-4 pt-16 min-h-min min-w-screen mx-4">
        <div class="mb-4">
          <p>
            Nothing found for "<em class="font-bold">{{ searchQuery }}</em>". Please try again!
          </p>
        </div>
      </div>
    </div>
  </template>
  