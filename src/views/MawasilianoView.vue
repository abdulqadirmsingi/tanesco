<!-- ContactPage.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      <div class="md:flex">
        <div class="md:flex-shrink-0 bg-green-600 text-white p-8 md:w-1/3">
          <h2 class="text-3xl font-bold mb-6">Wasiliana Nasi</h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <i class="pi pi-phone mr-3 text-2xl"></i>
              <div>
                <p>+255737584782</p>
                <p>+255733140107</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="pi pi-envelope mr-3 text-2xl"></i>
              <p>info.saccos@tanescosaccos.or.tz</p>
            </div>
            <div class="flex items-center">
              <i class="pi pi-map-marker mr-3 text-2xl"></i>
              <p>S.L.P 54231, Dar es Salaam</p>
            </div>
          </div>
          <h3 class="text-xl font-semibold mt-8 mb-4">Masaa ya Kazi</h3>
          <div class="space-y-2">
            <p><span class="font-semibold">Jumatatu – Ijumaa:</span> Saa 2:30 Asubuhi – 10:00 Jioni</p>
            <p><span class="font-semibold">Jumamosi:</span> Saa 3:00 Asubuhi – Saa 7:00 Mchana</p>
            <p><span class="font-semibold">Jumapili na Sikukuu Zote:</span> Hatufungui</p>
          </div>
        </div>
        <div class="p-8 md:w-2/3">
          <h2 class="text-3xl font-bold text-green-800 mb-6">Tuma Ujumbe</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div class="flex-1">
                <label for="name" class="block text-sm font-medium text-gray-700">Jina</label>
                <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50">
              </div>
              <div class="flex-1">
                <label for="email" class="block text-sm font-medium text-gray-700">Barua pepe</label>
                <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50">
              </div>
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Somo</label>
              <input type="text" id="subject" v-model="form.subject" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Ujumbe</label>
              <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
            </div>
            <div>
              <button type="submit" class="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Tuma Ujumbe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.form);
      alert('Asante kwa ujumbe wako. Tutawasiliana nawe hivi karibuni!');
      this.form = { name: '', email: '', subject: '', message: '' };
    }
  }
}
</script>

<style scoped>
@import 'primeicons/primeicons.css';
</style>