<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
<p class="flex justify-center text-white text-shadow mt-20 -mb-32 italic">A comicbook library and marvel character search</p>
<div class="">
 
  <header>
    <div class=" text-center w-full h-full my-28 ">
      <div class="flex flex-col justify-center items-center h-full leading-10 scale-[0.7] md:scale-[1] ">
        <h1 class="logo-shadow textlogo-shadow mt-8 text-8xl uppercase pl-1 pr-4 bg-red-600 text-white tracking-[-10px] font-bold border"><p class="">Marvel</p></h1>
        <h2 class="text-shadow text-white pl-9 text-2xl mt-1 font-extralight tracking-[37px]">LIBRARY</h2>
      </div>
      
    </div>
  </header>
  
  <nav class="text-shadow absolute top-2 flex px-2 justify-between items-center border-b border-[#ffff]/40 w-full">
  <div class="flex relative">
      <div class="bg-[#ffff]/30 w-40 h-10 rounded-full filter blur-2xl animate-pulse z-0"></div>
      <RouterLink to="/" class="textlogo-shadow absolute inset-0 flex items-center justify-center px-4 py-2 rounded-s-md text-white tracking-widest hover:text-[#e2e1e1]">Comicbooks</RouterLink>
  </div>

  <div class="flex relative">
      <div class="bg-[#ffff]/30 w-40 h-10 rounded-full filter blur-2xl animate-pulse z-0"></div>
      <RouterLink to="/search" class="textlogo-shadow absolute inset-0 flex items-center justify-center px-4 py-2 border-s-0 text-white tracking-widest hover:text-[#e2e1e1] rounded-e-md">Characters</RouterLink>
  </div>

</nav>


  <main >
<RouterView />
</main>

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

.bg-css {
backface-visibility: hidden;
position: relative;
cursor: pointer;
display: inline-block;
white-space: nowrap;
border-color: #111;
color: #555;
background: linear-gradient(180deg,#555 0%,#222 49%, #000 51%,#222 100%);
border-radius: 5px;
box-shadow: inset 0px 1px 0px rgba(255,255,255,.5),0px 1px 3px rgba(0,0,0,0.3);
}

</style>