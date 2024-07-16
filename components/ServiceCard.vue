<script setup lang="ts">
  const props = defineProps<{
    imgName: string,
    nameKey: string,
    descKey: string,
    reverse: boolean,
  }>();

  const flexDir = computed(() => "md:flex-row" + (props.reverse ? "-reverse" : ""));
</script>

<template>
  <figure :class="`max-w-none bg-white rounded-lg shadow-lg flex flex-col overflow-hidden ${flexDir}`">
    <NuxtImg class="w-full md:w-1/2 h-48 md:h-auto object-cover flex-1" :src="`/img/${imgName}.webp`" />
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