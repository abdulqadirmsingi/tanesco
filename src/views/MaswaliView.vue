<!-- FAQPage.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
    <h1 class="text-4xl font-bold text-center text-green-800 mb-12">Maswali Yanayoulizwa Mara kwa Mara</h1>
    <div class="max-w-3xl mx-auto space-y-6">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-200">
        <button @click="toggleFaq(index)" class="w-full p-6 text-left focus:outline-none">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-green-700">{{ faq.question }}</h2>
            <i :class="['pi', faq.isOpen ? 'pi-chevron-up' : 'pi-chevron-down', 'text-green-500 transition-transform duration-300']"></i>
          </div>
        </button>
        <div v-show="faq.isOpen" class="px-6 pb-6">
          <p class="text-gray-700 mt-2" v-html="faq.answer"></p>
        </div>
      </div>
    </div>
    <div class="mt-12 text-center">
      <button @click="showContactForm = true" class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
        <i class="pi pi-envelope mr-2"></i>Una maswali zaidi? Wasiliana nasi
      </button>
    </div>
    <!-- Contact Form Modal -->
    <div v-if="showContactForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 class="text-2xl font-bold mb-4 text-green-800">Wasiliana Nasi</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Jina</label>
            <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Barua pepe</label>
            <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Ujumbe</label>
            <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"></textarea>
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" @click="showContactForm = false" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Ghairi
            </button>
            <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Tuma
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Ni nani awezaye kujiunga Tanesco Saccos?",
          answer: "Uanachama ndani ya TANESCO SACCOS uko wazi kwa <span class='text-green-600 font-semibold'>Mwajiriwa/mstaafu wa Shirika la Umeme TANESCO, TANESCO SACCOS, Wizara ya Nishati na Madini na Taasisi zake, na Kampuni nyinginezo zitakazokubaliwa na Bodi ya Chama</span>.",
          isOpen: false
        },
        {
          question: "Nitawezaje kujiunga na Tanesco Saccos Mobile Banking?",
          answer: "Mwanachama anaweza kujisajili kwa <span class='text-green-600 font-semibold'>kupakua App ya Tanesco saccos kwenye Playstore</span> kupitia simu yake ya mkononi, kisha atapokea OTP ambayo itamuwezesha kubadili PIN/password anayoitaka.",
          isOpen: false
        },
        {
          question: "ATM Card yangu naweza kuitumia wapi, au kwenye Benki zipi naweza kupata huduma?",
          answer: "Unaweza kutumia kadi yako ya FOSA kwa <span class='text-green-600 font-semibold'>Wakala wa TCB/TPB , ATM za TPB/TCB, Pamoja na ATM zote za UMOJA SWITCH</span>.",
          isOpen: false
        },
        {
          question: "Ni hatua zipi za kufuata ikiwa Mwanachama anataka kujitoa chama?",
          answer: "Mwanachama anatakiwa:<br>1. <span class='text-green-600 font-semibold'>Kuandika Barua kwa Mwenyekiti wa chama</span> kuelezea nia yake ya kujitoa chama<br>2. <span class='text-green-600 font-semibold'>Kuweka namba ya Account ya Bank</span> ambayo itatumika kufanya Malipo<br>3. Kutoa namba za simu kwa ajili ya mawasiliano<br>4. Malipo ya Kujitoa yatafanyika <span class='text-green-600 font-semibold'>siku 60 toka tarehe ya maombi</span> hayo kuwasilishwa ofisini.",
          isOpen: false
        }
      ],
      showContactForm: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
    submitForm() {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.form);
      alert('Asante kwa ujumbe wako. Tutawasiliana nawe hivi karibuni!');
      this.showContactForm = false;
      this.form = { name: '', email: '', message: '' };
    }
  }
}
</script>

<style scoped>
@import 'primeicons/primeicons.css';
</style>