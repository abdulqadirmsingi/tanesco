<template>
  <div class="overflow-hidden">
    <Hero/>
    <section class="py-24 bg-gradient-to-br from-green-50 to-white">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl font-bold text-green-800 mb-16 text-center relative">
          Mikopo Yetu
          <span class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="service in services" :key="service.title" 
               class="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div class="text-green-600 mb-6">
              <component :is="service.icon" class="w-16 h-16" />
            </div>
            <h3 class="text-2xl font-semibold text-green-800 mb-4">{{ service.title }}</h3>
            <p class="text-green-700">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden relative">
    <!-- Background decorative elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full opacity-50 transform translate-x-1/3 translate-y-1/3"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col items-center">
        <!-- Main heading with animated underline -->
        <h2 class="text-5xl font-bold text-green-800 mb-16 text-center relative">
          Malengo Yetu
          <span class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 animate-pulse"></span>
        </h2>
        
        <!-- Mission and Vision cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
          <div v-for="(item, index) in missionVision" :key="index" 
               class="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105"
               :class="{ 'md:mt-12': index === 1 }">
            <div class="flex items-center mb-6">
              <i :class="item.icon" class="text-4xl text-green-600 mr-4"></i>
              <h3 class="text-3xl font-semibold text-green-800">{{ item.title }}</h3>
            </div>
            <p class="text-xl text-green-700 leading-relaxed mb-6">{{ item.description }}</p>
            <RouterLink to="/kuhusu-sisi" 
                    class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Soma Zaidi
            </RouterLink>
          </div>
        </div>
        
        <!-- Modal for additional details -->
        <!-- <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-8 max-w-2xl w-full m-4">
            <h3 class="text-3xl font-semibold text-green-800 mb-4">{{ selectedItem.title }}</h3>
            <p class="text-xl text-green-700 leading-relaxed mb-6">{{ selectedItem.fullDescription }}</p>
            <button @click="showModal = false" 
                    class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Funga
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </section>

    <section class="py-24 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-5xl font-bold text-green-800 mb-12 text-center relative inline-block">
        Huduma Zetu
        <span class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"></span>
      </h2>
      
      <p class="text-xl text-green-700 text-center max-w-3xl mx-auto leading-relaxed mb-16">
        Tanesco Saccos inajitolea kutoa huduma za kifedha kwa wanachama wake kwa urahisi kupitia programu yetu ya simu. Tunatoa huduma mbalimbali ikiwa ni pamoja na mikopo ya haraka, bidhaa za akiba, na elimu ya kifedha ili kuwasaidia wanachama wetu kufikia malengo yao ya kifedha.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services2" :key="index" 
             class="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1">
          <div class="flex items-center mb-4">
            <i :class="service.icon" class="text-4xl text-green-600 mr-4"></i>
            <h3 class="text-2xl font-semibold text-green-800">{{ service.title }}</h3>
          </div>
          <p class="text-green-700 mb-4">{{ service.description }}</p>
          <RouterLink to="/kuhusu-sisi" 
                  class="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
            Soma Zaidi
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full -mr-32 -mt-32 animate-pulse"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full -ml-32 -mb-32 animate-pulse"></div>
    <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-green-200 rounded-full transform -translate-y-1/2 animate-float"></div>
    <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-200 rounded-full animate-float-delayed"></div>

    <!-- Modal for additional details
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-2xl w-full m-4">
        <h3 class="text-3xl font-semibold text-green-800 mb-4">{{ selectedService.title }}</h3>
        <p class="text-xl text-green-700 leading-relaxed mb-6">{{ selectedService.fullDescription }}</p>
        <button @click="showModal = false" 
                class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
          Funga
        </button>
      </div>
    </div> -->
  </section>

    <section class="py-24 bg-gradient-to-br from-green-50 to-white overflow-hidden">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-bold text-green-800 mb-16 text-center relative">
        Tanesco Saccos Mobile App
        <span class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"></span>
      </h2>
      
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <!-- App Description -->
        <div class="lg:w-1/2 mb-12 lg:mb-0">
          <p class="text-xl text-green-700 mb-8">
            Hii ni APP kwa ajili ya kumuwezesha Mwanachama kupata huduma kwa urahisi na kwa haraka Zaidi.
          </p>
          <p class="text-lg text-green-600 mb-8">
            Mwanachama anaweza kujisajili kwa kupakua App ya Tanesco saccos kwenye Playstore kupitia simu yake ya mkononi, kisha atapokea OTP ambayo itamuwezesha kubadili PIN/password anayoitaka.
          </p>
          
          <!-- Download Buttons -->
          <div class="flex space-x-4">
            <a href="#" class="flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300">
              <i class="pi pi-apple mr-2 text-2xl"></i>
              <span>App Store</span>
            </a>
            <a href="#" class="flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
              <i class="pi pi-google mr-2 text-2xl"></i>
              <span>Google Play</span>
            </a>
          </div>
        </div>
        
        <!-- App Features -->
        <div class="lg:w-1/2">
          <div class="bg-white p-8 rounded-3xl shadow-xl">
            <h3 class="text-2xl font-semibold text-green-800 mb-6">App Features</h3>
            <ul>
              <li v-for="(feature, index) in features" :key="index" 
                  class="mb-6 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300 cursor-pointer"
                  @click="activeFeature = index">
                <div class="flex items-center">
                  <i :class="feature.icon" class="text-3xl text-green-600 mr-4"></i>
                  <div>
                    <h4 class="text-xl font-semibold text-green-800">{{ feature.title }}</h4>
                    <p class="text-green-600">{{ feature.description }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- App Screenshot (placeholder) -->
      <div class="mt-16 text-center">
        <div class="inline-block relative">
          <img src="/images/tanesco.png" alt="Tanesco Saccos Mobile App" class="rounded-3xl shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-30 rounded-3xl"></div>
        </div>
      </div>
    </div>
  </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-gradient-to-tl from-green-50 to-white relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-5xl font-bold text-green-800 mb-16 text-center relative inline-block">
          Shuhuda
          <span class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="testimonial in testimonials" :key="testimonial.name" 
               class="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div class="flex items-center mb-6">
              <img :src="testimonial.avatar || '/api/placeholder/100/100'" :alt="testimonial.name" class="w-16 h-16 rounded-full mr-4 border-4 border-green-300">
              <div>
                <h3 class="font-semibold text-green-800 text-xl">{{ testimonial.name }}</h3>
                <p class="text-green-600">{{ testimonial.title }}</p>
              </div>
            </div>
            <p class="text-green-700 italic">"{{ testimonial.quote }}"</p>
          </div>
        </div>
      </div>
      <div class="absolute top-1/2 left-0 w-48 h-48 bg-green-100 rounded-full -ml-24 animate-bounce"></div>
      <div class="absolute bottom-0 right-0 w-48 h-48 bg-green-100 rounded-full -mr-24 -mb-24 animate-bounce"></div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import { ref } from 'vue';
import { BoltIcon, BanknotesIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

const activeFeature = ref(0);
const showModal = ref(false);
const selectedItem = ref({});
const selectedService = ref({});

const services2 = [
  {
    title: "Mikopo ya Haraka",
    description: "Pata mikopo ya haraka na masharti nafuu.",
    fullDescription: "Tunatoa mikopo ya haraka kwa wanachama wetu ili kukidhi mahitaji yao ya kifedha ya dharura. Mchakato wetu wa maombi ni rahisi na wa haraka, ukiwezesha wanachama kupata fedha wanazozihitaji kwa wakati muafaka.",
    icon: "pi pi-bolt"
  },
  {
    title: "Bidhaa za Akiba",
    description: "Ongeza utajiri wako na bidhaa zetu za akiba.",
    fullDescription: "Tunatoa bidhaa mbalimbali za akiba zinazokidhi mahitaji tofauti ya wanachama wetu. Kutoka kwa akaunti za akiba za kawaida hadi mipango ya uwekezaji ya muda mrefu, tuna suluhisho za kukusanya na kukuza utajiri wako.",
    icon: "pi pi-wallet"
  },
  {
    title: "Elimu ya Kifedha",
    description: "Jifunze jinsi ya kudhibiti fedha zako vizuri.",
    fullDescription: "Tunatoa mafunzo na warsha za elimu ya kifedha kwa wanachama wetu. Lengo letu ni kuwapa wanachama wetu ujuzi na maarifa wanayohitaji kufanya maamuzi sahihi ya kifedha na kufikia malengo yao ya kifedha.",
    icon: "pi pi-book"
  }
];


const missionVision = [
  {
    title: "Dira Ya Chama",
    description: "Kuwa saccos ya mfano inayotoa huduma bora za ukusanyaji wa akiba na utoaji wa mikopo nafuu.",
    fullDescription: "Tunadhamiria kuwa mfano wa saccos inayotoa huduma bora za ukusanyaji wa akiba na utoaji wa mikopo nafuu. Tunalenga kuwa kiongozi katika sekta hii, tukitoa suluhisho za kifedha zinazokidhi mahitaji ya wanachama wetu na kuchangia katika ukuaji wa jamii zetu.",
    icon: "pi pi-eye"
  },
  {
    title: "Dhima Ya Chama",
    description: "Kuboresha hali za uchumi na kijamii za wanachama kupitia mikopo nafuu.",
    fullDescription: "Lengo letu kuu ni kuboresha maisha ya wanachama wetu kwa njia ya kifedha na kijamii. Tunatoa mikopo nafuu ili kuwasaidia wanachama wetu kufanikisha ndoto zao, kuanzisha na kukuza biashara, na kukabiliana na changamoto za kifedha. Tunaamini kwamba kwa kuboresha hali ya maisha ya wanachama mmoja mmoja, tunaimarisha jamii nzima.",
    icon: "pi pi-bullseye"
  }
];

function showDetails(index) {
  selectedItem.value = missionVision[index];
  showModal.value = true;
}

const features = [
  {
    title: 'Lipa Bili',
    description: 'Lipa Ankara kwa simu yako Kiganjani',
    icon: 'pi pi-wallet'
  },
  {
    title: 'Dhibiti Pesa Zako',
    description: 'Tumia Fedha zako Muda wowote, na Ukiwa mahali popote',
    icon: 'pi pi-chart-line'
  },
  {
    title: 'Tuma Pesa',
    description: 'Tuma Pesa, Nunua Muda wa Maongezi, Muda Wowote, sehemu yoyote',
    icon: 'pi pi-send'
  }
];

const services = ref([
  {
    title: 'Mikopo ya BOSA',
    description: 'Mikopo yote ya BOSA itatolewa kwa mwanachama kwa kuzingatia 1/3 ya Mshahara na Akiba alizonazo mwanachama',
    icon: BoltIcon,
  },
  {
    title: 'Mikopo ya FOSA',
    description: 'Mikopo yote ya FOSA itatolewa kwa mwanachama ambae mshahara wake unapitia kwenye akaunti yake ya FOSA',
    icon: BanknotesIcon,
  },
  {
    title: 'Mikopo ya Ujasiriamali',
    description: 'Mkopo wa Ujasiriamali utatolewa kwa mwanachama bila kuzingatia mshahara wake, ila lazima mshahara wake upitie FOSA.',
    icon: ChartBarIcon,
  },
]);

const testimonials = ref([
  {
    name: 'Peter Mangowi',
    title: 'Mfanyakazi wa Tanesco & Mjasiriamali',
    quote: 'The Tanesco Saccos app has made managing my finances so much easier. I love how quick and convenient it is to apply for loans.',
    avatar: '/images/testimonials.png',
  },
  {
    name: 'Zamda Sasilo',
    title: 'Retired Tanesco Manager',
    quote: 'I have been a member for years, and the new mobile app is a game-changer. It is  user-friendly and secure.',
    avatar: '/images/testimonials2.png',
  },
  {
    name: 'John Doe',
    title: 'Tanesco Engineer',
    quote: 'The financial planning services have helped me prepare for my future. I am grateful for the support from Tanesco Saccos.',
    avatar: '',
  },
]);
</script>

<style scoped>

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-bounce {
  animation: bounce 5s infinite;
}
</style>