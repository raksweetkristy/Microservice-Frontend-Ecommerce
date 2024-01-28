<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm py-2 mt-8">
    
    <section>
      <div class="grid grid-cols-4 gap-4">
      <div class="bg-white shadow-sm rounded-sm overflow-hidden">
        <div class="categories-title-homepage text-xl">
          Categories
        </div>
        <ul class="main-menu-categories">
          <li>
            <NuxtLink v-for="item in items" to="/categories" class="hover:bg-gray-100">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="bg-white shadow-sm col-span-3 rounded-sm overflow-hidden">
        <img class="w-full h-full" src="https://via.placeholder.com/500x200" alt="">
      </div>
    </div>
    </section>

    <section>
      <div class="grid grid-cols-3 gap-8 mt-10">
      <div class="grid grid-cols-2 background-cart-promote shadow rounded-md">
        <div class=" p-5 flex items-center  ">
          <div>
            <div>
            Week Discount
            </div>
            <h1 class="text-3xl my-3 mb-5 font-semibold">
              Modern Watch 
            </h1>
            <button class="border-2 border-black p-2 px-6 font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img class="img-background-cart" style="height: 70%;" src="~/public/img/orange_alpine_loop.png"  alt="">
        </div>
      </div>
      <div class="grid grid-cols-2 background-cart-promote shadow rounded-md">
        <div class=" p-5 flex items-center  ">
          <div>
            <div>
            Best Selling
            </div>
            <h1 class="text-3xl my-3 mb-5 font-semibold">
              Iphone 15 Pro Max
            </h1>
            <button class="border-2 border-black p-2 px-6 font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img class="img-background-cart" style="height: 70%;" src="~/public/img/PNG.monsterblack-apple-iphone-15-pro-max-iphone-15-pro png.png"  alt="">
        </div>
      </div>
      <div class="grid grid-cols-2 background-cart-promote shadow rounded-md">
        <div class=" p-5 flex items-center  ">
          <div>
            <div>
            New Arrival
            </div>
            <h1 class="text-3xl my-3 mb-5 font-semibold">
              HeadPhone Wireless
            </h1>
            <button class="border-2 border-black p-2 px-6 font-semibold">
              Shop Now
            </button>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img class="img-background-cart" style="height: 70%;" src="~/public/img/b9f519195f84950573eea5088a49b964.png"  alt="">
        </div>
      </div>
    </div>
    </section>


    <section>
      <div>
        <div class="flex justify-between items-center border-b mt-10">
          <h2 class="border-b-2 py-1 text-2xl font-medium border-black">Popular Products</h2>
          <NuxtLink to="">View All</NuxtLink>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-8 mt-3">
        <div class="border cart-product rounded-md bg-white p-3 hover:shadow-xl duration-75">
          <div class="flex justify-end">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
          </div>
          <div class="flex justify-center">
            <img class="img-background-cart" style="width: 100%;" src="~/public/img/PNG.monsterblack-apple-iphone-15-pro-max-iphone-15-pro png.png"  alt="">
          </div>
          <div>
            <p class="text-xs text-gray-700">Smart Phone</p>
            <p class="text-lg font-semibold	">Iphone 15 Pro Max</p>
            <div class="flex my-2">
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div class="flex justify-between items-center">
              <b class="text-lg">$21.00</b>
              <button class="btn-cart p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></button>
            </div>
          </div>
        </div>
        <div>
           
        </div>
        <div>
           
        </div>
        <div>
           
        </div>
        <div>
           
        </div>
      </div>
    </section>


    <section>
      <div>
        <div class="mt-10 bg-white rounded-md shadow-sm grid grid-cols-2">
          <div class="flex justify-start items-center p-4 px-10">
            <div>
              <span class=" p-1 text-white" style="background-color: #f24770;">Limited Offer</span>
              <h3 class="text-3xl mt-8 font-thin">All New</h3>
              <h2 class="text-3xl my-2 font-semi-bold">Last Gen iPad Pro</h2>
              <p class="text-3xl font-thin">at discounted price. Hurry up!</p>

              <button class="flex mt-8 border-2 border-black p-2 px-6 font-semibold">
              Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            </div>
          </div>
          <div>
            <img style="height: 450px" src="~public/img/M2-iPad-Pro-series-1.jpg" alt="">
          </div>
          
        </div>
      </div>
    </section>
    


    <section>
      <div>
        <div class="flex justify-between items-center border-b mt-10">
          <h2 class="border-b-2 py-1 text-2xl font-medium border-black">New Arrival Products</h2>
          <NuxtLink to="">View All</NuxtLink>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-8 mt-3">
        <div class="border cart-product bg-white p-3 hover:shadow-xl duration-75">
          <div class="flex justify-end">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
          </div>
          <div class="flex justify-center">
            <img class="img-background-cart" style="height: 200px;" src="~/public/img/MacBook-Pro-Space-Black-M3-Pro.png"  alt="">
          </div>
          <div>
            <p class="text-xs text-gray-700">Smart Phone</p>
            <p class="text-lg font-semibold	">Iphone 15 Pro Max</p>
            <div class="flex my-2">
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: green" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg style="color: black" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 16.16 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div class="flex justify-between items-center">
              <b class="text-lg">$21.00</b>
              <button class="btn-cart p-2 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></button>
            </div>
          </div>
        </div>
        <div>
           
        </div>
        <div>
           
        </div>
        <div>
           
        </div>
        <div>
           
        </div>
      </div>
    </section>



    <section>
      <div class="mt-10 bg-white grid grid-cols-4">
        <div class="border p-5">
          <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><path d="M15 18H9"/><circle cx="17" cy="18" r="2"/></svg>
            <div class="font-bold text-lg my-2">
              Free Delivery
            </div>
            <div>
              For all oders over $99
            </div>
          </center>
        </div>
        <div class="border p-5">
          <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
            <div class="font-bold text-lg my-2">
              90 Days Return
            </div>
            <div>
              If goods have problems
            </div>
          </center>
        </div>
        <div class="border p-5">
          <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            <div class="font-bold text-lg my-2">
              Secure Payment
            </div>
            <div>
              100% secure payment
            </div>
          </center>
        </div>
        <div class="border p-5">
          <center>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-life-buoy"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
            <div class="font-bold text-lg my-2">
              24/7 Support
            </div>
            <div>
              Dedicated support
            </div>
          </center>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>

  useHead({
        title: 'Home',
    });

  const runtimeConfig = useRuntimeConfig();
  const { data: items } = await useAsyncData('posts', () => $fetch(`${runtimeConfig.public.apiBase}/categories`));


</script>