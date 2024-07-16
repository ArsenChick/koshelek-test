<script setup lang="ts">
  definePageMeta({
    title: 'Main Page | SSVC',
    description: 'Main page of the test task website for Koshelek.ru',
  });
</script>

<template>
  <div class="container mx-auto px-16 py-8">
    <main class="mb-16">
      <h1 class="text-4xl font-bold text-center mb-8">{{ $t('mainHead') }}</h1>
      <p class="text-lg text-gray-700 leading-relaxed text-justify">{{ $t('lipsumLong') }}</p>
    </main>
    <section>
      <h2 class="text-3xl font-bold text-center mb-8">{{ $t('servicesHead') }}</h2>
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
        <ul class="flex text-center justify-around">
          <li class="text-lg font-medium text-gray-800">{{ $t("serviceName1") }}</li>
          <li class="text-lg font-medium text-gray-800">{{ $t("serviceName2") }}</li>
          <li class="text-lg font-medium text-gray-800">{{ $t("serviceName3") }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>