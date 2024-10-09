<template>
  <div class="bg-green-50 min-h-screen">
    <header class=" text-green-700 p-4">
      <h1 class="text-4xl text-center font-bold">TANESCO SACCOS Forms</h1>
    </header>
    <main class="container mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="category in categories" :key="category.name" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div class="bg-green-500 text-white p-4">
            <h2 class="text-xl font-semibold flex items-center">
              <i :class="category.icon" class="mr-2"></i>
              {{ category.name }}
            </h2>
          </div>
          <ul class="divide-y divide-green-100">
            <li v-for="form in category.forms" :key="form.name" class="p-4 hover:bg-green-50 transition-colors duration-200">
              <a :href="form.url" download class="flex items-center justify-between text-green-700 hover:text-green-900">
                <span>{{ form.name }}</span>
                <i class="pi pi-download"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Fomu za Mikopo ya BOSA',
          icon: 'pi pi-file',
          forms: Array.from({ length: 5 }, (_, i) => ({
            name: `BOSA Form ${i + 1}`,
            url: `#bosa-form-${i + 1}`,
          })),
        },
        {
          name: 'Fomu za Mikopo ya FOSA',
          icon: 'pi pi-folder',
          forms: Array.from({ length: 10 }, (_, i) => ({
            name: `FOSA Form ${i + 1}`,
            url: `#fosa-form-${i + 1}`,
          })),
        },
        {
          name: 'FOSA Operations',
          icon: 'pi pi-cog',
          forms: Array.from({ length: 9 }, (_, i) => ({
            name: `FOSA Operation ${i + 1}`,
            url: `#fosa-operation-${i + 1}`,
          })),
        },
      ],
    };
  },
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
@import 'primeicons/primeicons.css';
</style>