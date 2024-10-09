<template>
  <div class="bg-gradient-to-br from-green-50 to-white min-h-screen">
    <!-- Hero Section (unchanged) -->
    <section class="py-20 px-4 relative overflow-hidden">
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-6xl font-bold text-green-800 mb-6">Kuhusu Sisi</h1>
        <p class="text-2xl text-green-700 max-w-3xl mx-auto">
          Miaka 54 ya Utoaji Huduma za Mikopo na Ukuaji Endelevu
        </p>
      </div>
      <div class="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full -ml-32 -mt-32 animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-green-200 rounded-full -mr-32 -mb-32 animate-pulse"></div>
    </section>

    <!-- Key Statistics (unchanged) -->
    <section class="py-16 bg-green-800 text-white" ref="statsSection">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="stat in statistics" :key="stat.title" class="text-center">
            <div class="text-4xl font-bold mb-2">
              <animated-number :value="stat.value" :duration="2000" />
            </div>
            <div class="text-xl">{{ stat.title }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Historia Yetu Section (modified) -->
    <section class="py-20 px-4 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-green-800 mb-8 text-center">Historia Yetu</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <p class="text-lg text-green-700 leading-relaxed">
              Chama kilianza mwaka 1968 na hadi mwaka 2004 kilikua na wanachama 315 na jumla ya akiba za wanachama zipatazo Tsh. milioni 533.
            </p>
            <p class="text-lg text-green-700 leading-relaxed">
              Mwaka 2004 yalifanyika mageuzi makubwa ya uongozi ili kukiboresha chama, na mafanikio yake yalikua makubwa kwani chama kiliweza kuongeza idadi ya wanachama hadi kufikia wanachama 2906 na akiba kufikia takribani bilioni 6 Julai 2009.
            </p>
            <p class="text-lg text-green-700 leading-relaxed">
              Mapato ya kila mwezi yameongezeka kutoka millioni 25 mwaka 2004 na hadi kufikia milioni 630, Mei 2010.
            </p>
          </div>
          <div class="bg-green-100 p-8 rounded-lg shadow-xl">
            <h3 class="text-2xl font-bold text-green-800 mb-4">Malengo Yetu</h3>
            <ul class="space-y-4">
              <li v-for="(goal, index) in goals" :key="index" class="flex items-start">
                <span class="text-green-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-green-700">{{ goal }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Tuzo (Awards) Section (new) -->
    <section class="py-20 px-4 bg-green-50">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-green-800 mb-12 text-center">Tuzo</h2>
        <div class="relative">
          <div class="absolute top-0 bottom-0 left-1/2 w-1 bg-green-500 transform -translate-x-1/2"></div>
          <div class="space-y-16">
            <div v-for="award in awards" :key="award.year" class="relative">
              <div class="absolute left-1/2 w-6 h-6 bg-green-500 rounded-full transform -translate-x-1/2"></div>
              <div class="flex items-center w-full">
                <div class="w-1/2 pr-8 text-right">
                  <h3 class="text-2xl font-bold text-green-800">{{ award.year }}</h3>
                </div>
                <div class="w-1/2 pl-8">
                  <div class="bg-white p-6 rounded-lg shadow-md">
                    <img :src="award.icon" :alt="award.company" class="w-16 h-16 mb-4">
                    <h4 class="text-xl font-semibold text-green-700 mb-2">{{ award.company }}</h4>
                    <p class="text-green-600">{{ award.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section (unchanged) -->
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-green-800 mb-12 text-center">Wadau Wetu</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="partner in partners" :key="partner" 
               class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <img :src="``" :alt="partner" class="max-w-full h-auto">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AnimatedNumber from '@/components/AnimatedNumber.vue';

const statistics = ref([
  { title: 'Miaka ya Huduma', value: 54 },
  { title: 'Wanachama', value: 2906 },
  { title: 'Tuzo', value: 10 },
  { title: 'Wadau', value: 20 }
]);

const goals = ref([
  'Kuongeza idadi ya wanachama kwa 20% kila mwaka',
  'Kuboresha huduma za kidigitali',
  'Kuendeleza elimu ya fedha kwa wanachama',
  'Kuimarisha ushirikiano na wadau wetu'
]);

const awards = ref([
  { year: 2015, company: 'CRDB', description: 'Tuzo ya Ufanisi wa Kifedha', icon: '/images/crdb.png' },
  { year: 2016, company: 'ICUD', description: 'Tuzo ya Ubunifu katika Huduma', icon: '/icons/icud.svg' },
  { year: 2017, company: 'SUD', description: 'Tuzo ya Ukuaji Endelevu', icon: '/icons/sud.svg' },
  { year: 2021, company: 'CRDB', description: 'Tuzo ya Uongozi Bora', icon: '/images/crdb.png' }
]);

const partners = ref([
  'TANESCO', 'Benki Kuu', 'Wizara ya Fedha', 'TCDC'
]);

const statsSection = ref(null);

const handleScroll = () => {
  if (statsSection.value) {
    const rect = statsSection.value.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      statistics.value.forEach(stat => stat.animate = true);
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>