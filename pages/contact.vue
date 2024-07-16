<script setup lang="ts">
  definePageMeta({
    title: 'Contact | SSVC',
    description: "Don't hesitate to reach out to us in SSVC (in the framework of the test task website for Koshelek.ru)",
  });

  const name = ref("");
  const mail = ref("");
  const message = ref("");

  const onSubmit = (event: Event) => {
    console.log({
      name: name.value,
      mail: mail.value,
      message: message.value,
    });

    name.value = "";
    mail.value = "";
    message.value = "";
  }
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-center mb-8">{{ $t('contactHead') }}</h2>
    <div class="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
      <form @submit.prevent="onSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-gray-700 font-bold mb-2">{{ $t('nameLabel') }}:</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            :placeholder="$t('namePlaceholder')"
            v-model="name"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div>
          <label for="mail" class="block text-gray-700 font-bold mb-2">{{ $t('emailLabel') }}:</label>
          <input
            required
            id="mail"
            name="mail"
            type="email"
            :placeholder="$t('emailPlaceholder')"
            v-model="mail"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-bold mb-2">{{ $t('msgLabel') }}:</label>
          <textarea
            required
            id="message"
            name="message"
            :placeholder="$t('msgPlaceholder')"
            v-model="message"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>
        <div>
          <button type="submit" class="w-full bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
            {{ $t('submitText') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
