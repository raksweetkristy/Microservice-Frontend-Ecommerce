<template>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm py-2 mt-8">
        <div class="bg-white rounded-md shadow p-5">
            <h1 class="text-xl">Sign In</h1>

            <label for="">Name</label>
            <input type="text" class="border">
            

            <div>
                <NuxtLink to="/user/register">Sign Up </NuxtLink>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    useHead({
            title: 'Login ',
        });
    const runtimeConfig = useRuntimeConfig();
    // const { data: items } = await useAsyncData('posts', () => $fetch(`${runtimeConfig.public.apiBase}/categories`))
  </script>