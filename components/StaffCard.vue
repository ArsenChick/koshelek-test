<script setup lang="ts">
  defineProps<{
    nameKey: string,
    descKey: string,
  }>();
</script>

<template>
  <figure class="bg-white shadow-lg rounded-lg overflow-hidden">
    <NuxtImg class="w-full h-48 object-cover" src="/img/person.webp"/>
    <div class="p-6">
      <figcaption class="mb-4">
        <div class="text-xl font-semibold text-center">{{ $t(nameKey) }}</div>
      </figcaption>
      <blockquote class="text-gray-600 text-center">
        <p>{{ $t(descKey) }}</p>
      </blockquote>
    </div>
  </figure>
</template>