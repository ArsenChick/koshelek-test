<script setup lang="ts">
  definePageMeta({
    title: 'About us | SSVC',
    description: 'Find out more about the team behind SSVC (in the framework of the test task website for Koshelek.ru)',
  });

  import TEAM from '~/constants/team';
  const team = TEAM;
</script>

<template>
  <div class="container mx-auto px-16 py-8">
    <section class="mb-16">
        <h2 class="text-3xl font-bold text-left mb-4">{{ $t('aboutHead') }}</h2>
        <p class="text-lg text-gray-700 leading-relaxed text-justify">{{ $t('lipsumLong') }}</p>
    </section>
    <section>
      <h2 class="text-3xl font-bold text-center mb-8">{{ $t('staffHead') }}</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li v-for="member in team" :key="member.id" class="flex justify-center">
          <StaffCard :name-key="member.nameKey" :desc-key="member.descKey" class="w-full max-w-xs"></StaffCard>
        </li>
      </ul>
    </section>
  </div>
</template>
