<script setup>
  const { locale, setLocale } = useI18n()
</script>

<template>
  <div class="bg-red-900 text-white">
    <nav class="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-8">
      <div class="container mx-auto flex space-x-12 items-center py-4">
        <NuxtLink :to="`/${locale}/`" class="text-2xl font-bold">SSVC</NuxtLink>
        <ul class="flex space-x-8">
          <li><NuxtLink :to="`/${locale}/services`" class="hover:text-gray-400">{{ $t('navServices') }}</NuxtLink></li>
          <li><NuxtLink :to="`/${locale}/about`" class="hover:text-gray-400">{{ $t('navAbout') }}</NuxtLink></li>
          <li><NuxtLink :to="`/${locale}/contact`" class="hover:text-gray-400">{{ $t('navContact') }}</NuxtLink></li>
        </ul>
      </div>
      <div class="flex space-x-4">
        <button @click="setLocale('en')" class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">EN</button>
        <button @click="setLocale('ja')" class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">JA</button>
      </div>
    </nav>
  </div>
</template>