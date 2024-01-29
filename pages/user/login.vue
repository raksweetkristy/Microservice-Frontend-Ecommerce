<script setup>
import { CircleUser, Lock } from "lucide-vue-next";
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm py-2 mt-8">
    <div class="flex h-[65vh]">
      <div class="w-[65%] h-full">
        <img src="/img/login.jpg" alt="" />
      </div>
      <div class="w-[35%] flex flex-col justify-center px-2">
        <h1 class="text-xl font-medium text-primary text-center">
          Login Account
        </h1>
        <p class="text-center text-gray/70 text-sm my-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          harum temporibus accusamus quidem eum pariatur, impedit facere earum
          maxime asperiores?
        </p>
        <form class="flex flex-col gap-6 px-5 py-10">
          <div class="flex items-center w-full">
            <Input titleprop="Username" typeprop="text" />
            <CircleUser size="30" class="ml-[-35px] text-primary" />
          </div>
          <div class="flex items-center w-full">
            <Input titleprop="Password" typeprop="password" />
            <Lock size="30" class="ml-[-35px] text-primary" />
          </div>
          <h1 class="text-gray/70 font-medium text-sm">Forgot password?</h1>
          <input
            class="text-white bg-primary hover:bg-primary/50 py-3 font-medium rounded-md cursor-pointer"
            type="submit"
            value="LOGIN"
          />
        </form>
        <p class="text-gray/70 font-medium text-sm text-center">
          Not a member?
          <span class="text-primary hover:text-primary/50">
            <NuxtLink to="/user/register"> Sign up </NuxtLink>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login", // Use the 'login.vue' layout for this page
};
</script>
