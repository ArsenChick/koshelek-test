<script setup lang="ts">
  defineProps<{
    imgName: string,
    nameKey: string,
    descKey: string,
    reverse?: boolean,
  }>();
</script>

<template>
  <figure :class="`bg-white rounded-lg shadow-lg flex flex-col overflow-hidden max-w-none md:flex-row${reverse ? '-reverse' : ''}`">
    <NuxtImg class="w-full md:w-1/2 object-cover flex-1" :src="`/img/${imgName}.webp`" />
    <div class="p-6 flex flex-col flex-1 justify-center">
      <figcaption>
        <div class="text-xl font-semibold mb-2">{{ $t(nameKey) }}</div>
      </figcaption>
      <blockquote class="text-gray-600">
        <p>{{ $t(descKey) }}</p>
      </blockquote>
    </div>
  </figure>
</template>