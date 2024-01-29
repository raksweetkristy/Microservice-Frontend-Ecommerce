<template>
  <input
    :class="`w-full py-3 pl-2 bg-gray/5 rounded-md text-black font-semibold placeholder:font-bold placeholder:text-gray/50 focus-visible:outline-primary ${styleprop}`"
    :type="typeprop"
    :placeholder="titleprop"
    maxlength="30"
  />
</template>

<script setup>
// if you want change placeholder you can change by titleprop
// if you want change type you can change by typeprop
// if you want change style  you can change by styleprop
const { titleprop, typeprop, styleprop } = defineProps([
  "titleprop",
  "typeprop",
  "styleprop",
]);
</script>
