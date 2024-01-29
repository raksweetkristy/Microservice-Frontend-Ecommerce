<template>
    <nav class="bg-white">
        <div class="border-b border-gray/20">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm flex justify-between py-2 text-gray-500 ">
                <ul>
                    <li>Enjoy a safe, convenient shopping experience.</li>
                </ul>
                <ul>
                    <li>+(855) 10 87 82 06</li>
                </ul>
            </div>
        </div>
        <div class="border-b border-gray/20">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm flex justify-between py-5">
                <ul>
                    <li><img style="width: 200px;" src="https://cartzilla.createx.studio/img/logo-dark.png" alt=""></li>
                </ul>
                <div class="flex items-center nav-search-box">
                    <input type="text" class="border p-3 px-5 navbar-search" placeholder="Looking for ...">
                    <button class="border-t border-r border-b p-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </button>
                </div>
                <ul class="flex items-center navbar-option">
                    <li>
                        <NuxtLink :to="`/user/login`">
                            <center>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                            My Account
                        </center>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/wishlist`">
                        <center>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        </div>
                        Wishlist
                        </center>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/cart`">
                            <center>
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                            </div>
                            Cart
                            </center>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-b border-gray/20 ">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm flex justify-between py-2">
                <ul class="flex navbar-menu text-sm">
                    <li>
                        <NuxtLink to="/" >
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/categories">Categories</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>