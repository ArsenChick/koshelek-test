<script setup lang="ts">
  definePageMeta({
    title: 'Services | SSVC',
    description: 'Services provided to our users by SSVC (in the framework of the test task website for Koshelek.ru)',
  });

  import SERVICES from '~/constants/services';
  const serviceList = SERVICES;
</script>

<template>
  <div class="container mx-auto px-16 py-8">
    <h2 class="text-3xl font-bold text-center mb-8">{{ $t("servicesHead") }}</h2>
    <div>
      <ul class="grid grid-cols-1 gap-8">
        <li v-for="service in serviceList" :key="service.id" class="flex justify-center">
          <ServiceCard
            :name-key="service.nameKey"
            :desc-key="service.descKey"
            :img-name="`service${service.id}`"
            :reverse="service.id % 2 !== 0"
            class="w-full max-w-sm">
          </ServiceCard>
        </li>
      </ul>
    </div>
  </div>
</template>
