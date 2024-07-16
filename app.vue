<script setup lang="ts">
  const route = useRoute();

  useHead({
    title: computed(() => `${route.meta.title}`),
  });
  useSeoMeta({
    title: computed(() => `${route.meta.title}`),
    ogTitle: 'Solana Staking Validator — SBVC',
    description: computed(() => `${route.meta.description}`),
    ogDescription: 'This is my test task site for Koshelek.ru.',
  });
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LazyNavPanel class="flex-shrink-0" />
    <NuxtPage class="flex-grow" />
    <LazyFooter class="flex-shrink-0" />
  </div>
</template>
