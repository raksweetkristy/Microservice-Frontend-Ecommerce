<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm py-2 mt-8">
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-white shadow-sm rounded-sm overflow-hidden">
        <div class="categories-title-homepage text-xl">
          Categories
        </div>
        <ul class="main-menu-categories">
          <li>
            <NuxtLink v-for="item in items" to="/categories" class="hover:bg-gray/10 text-black">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="bg-white shadow-sm col-span-3 rounded-sm overflow-hidden">
        <img src="https://via.placeholder.com/300x120" class="w-full" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

  useHead({
        title: 'Home',
    });

  const runtimeConfig = useRuntimeConfig();
  const { data: items } = await useAsyncData('posts', () => $fetch(`${runtimeConfig.public.apiBase}/categories`));


</script>