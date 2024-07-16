<template>
  <div class="bg-red-900 text-white py-6 px-8">
    <footer>
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; 2024 {{ $t('footerComp') }}</p>
        </div>
        <div>
          <ul class="flex space-x-6">
            <li><a href="https://facebook.com" target="_blank" class="hover:text-gray-400">Facebook</a></li>
            <li><a href="https://x.com" target="_blank" class="hover:text-gray-400">X</a></li>
            <li><a href="https://instagram.com" target="_blank" class="hover:text-gray-400">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" class="hover:text-gray-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>