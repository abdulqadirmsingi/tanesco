<template>
  <div class="bg-white min-h-screen font-sans">
    <header class="text-green-700 py-4 sticky top-0 z-10">
      <h1 class="text-4xl font-bold text-center">Habari</h1>
    </header>
    <main class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="post in blogPosts" 
          :key="post.id" 
          class="bg-white border border-green-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <i class="pi pi-calendar mr-2 text-green-600"></i>
              <span class="text-sm text-gray-600">{{ post.date }}</span>
            </div>
            <h2 class="text-xl font-bold text-green-800 mb-2">{{ post.title }}</h2>
            <p class="text-gray-700 mb-4">{{ post.excerpt }}</p>
            <button 
              @click="openModal(post)"
              class="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out group"
            >
              Read more
              <i class="pi pi-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal -->
    <Transition name="modal">
      <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <h2 class="text-3xl font-bold text-green-800 mb-4">{{ selectedPost.title }}</h2>
            <p class="text-gray-600 mb-4">{{ selectedPost.date }}</p>
            <div class="prose max-w-none" v-html="selectedPost.content"></div>
            <button 
              @click="closeModal" 
              class="mt-6 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const blogPosts = ref([
  {
    id: 1,
    date: "August 22, 2024",
    title: "MIKUTANO YA DONDOO NA TAARIFA KWA WANACHAMA MATAWINI",
    excerpt: "Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Dondoo za Mkutano Mkuu wa mwaka 2024...",
    content: `
      <p>Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Dondoo za Mkutano Mkuu wa mwaka 2024 katika matawi yake nchi nzima kuanzia tarehe 07.09.2024 kutekeleza dhana ya ushirikishwaji wa wanachama katika mipango ya Chama.</p>
      <p>Mikutano hii itafanyika kwa njia ya mtandao kwa kutumia programu ya Zoom. Wanachama wote wanashauriwa kushiriki kikamilifu katika mikutano hii ili kupata taarifa muhimu za Chama na kutoa maoni yao.</p>
      <p>Ratiba kamili ya mikutano itatolewa hivi karibuni. Wanachama wanaombwa kuwa tayari na kuhakikisha wana vifaa vya kutosha kushiriki katika mikutano hii ya mtandao.</p>
    `
  },
  {
    id: 2,
    date: "March 13, 2024",
    title: "TANGAZO LA MIKUTANO YA MREJESHO NA TAARIFA KWA WANACHAMA MATAWINI-2024",
    excerpt: "Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023...",
    content: `
      <p>Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023 katika matawi yake nchi nzima kuanzia tarehe 16.03.2024 ili kuwajulisha juu ya maamuzi yaliyofikiwa na kuwapatia taarifa mbalimbali.</p>
      <p>Mikutano hii ni muhimu sana kwani itatoa fursa kwa wanachama kupata ufafanuzi wa masuala mbalimbali yaliyojadiliwa katika Mkutano Mkuu na pia kutoa maoni yao juu ya utekelezaji wa maamuzi yaliyofikiwa.</p>
      <p>Wanachama wote wanashauriwa kuhudhuria mikutano hii ili kujionea wenyewe maendeleo ya Chama na kushiriki katika kufanya maamuzi muhimu kwa ajili ya ustawi wa Chama chetu.</p>
    `
  },
  {
    id: 3,
    date: "March 13, 2024",
    title: "TANGAZO LA MIKUTANO YA MREJESHO NA TAARIFA KWA WANACHAMA MATAWINI-2024",
    excerpt: "Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023...",
    content: `
      <p>Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023 katika matawi yake nchi nzima kuanzia tarehe 16.03.2024 ili kuwajulisha juu ya maamuzi yaliyofikiwa na kuwapatia taarifa mbalimbali.</p>
      <p>Mikutano hii ni muhimu sana kwani itatoa fursa kwa wanachama kupata ufafanuzi wa masuala mbalimbali yaliyojadiliwa katika Mkutano Mkuu na pia kutoa maoni yao juu ya utekelezaji wa maamuzi yaliyofikiwa.</p>
      <p>Wanachama wote wanashauriwa kuhudhuria mikutano hii ili kujionea wenyewe maendeleo ya Chama na kushiriki katika kufanya maamuzi muhimu kwa ajili ya ustawi wa Chama chetu.</p>
    `
  },
  {
    id: 4,
    date: "March 13, 2024",
    title: "TANGAZO LA MIKUTANO YA MREJESHO NA TAARIFA KWA WANACHAMA MATAWINI-2024",
    excerpt: "Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023...",
    content: `
      <p>Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023 katika matawi yake nchi nzima kuanzia tarehe 16.03.2024 ili kuwajulisha juu ya maamuzi yaliyofikiwa na kuwapatia taarifa mbalimbali.</p>
      <p>Mikutano hii ni muhimu sana kwani itatoa fursa kwa wanachama kupata ufafanuzi wa masuala mbalimbali yaliyojadiliwa katika Mkutano Mkuu na pia kutoa maoni yao juu ya utekelezaji wa maamuzi yaliyofikiwa.</p>
      <p>Wanachama wote wanashauriwa kuhudhuria mikutano hii ili kujionea wenyewe maendeleo ya Chama na kushiriki katika kufanya maamuzi muhimu kwa ajili ya ustawi wa Chama chetu.</p>
    `
  },
  {
    id: 5,
    date: "March 13, 2024",
    title: "TANGAZO LA MIKUTANO YA MREJESHO NA TAARIFA KWA WANACHAMA MATAWINI-2024",
    excerpt: "Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023...",
    content: `
      <p>Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023 katika matawi yake nchi nzima kuanzia tarehe 16.03.2024 ili kuwajulisha juu ya maamuzi yaliyofikiwa na kuwapatia taarifa mbalimbali.</p>
      <p>Mikutano hii ni muhimu sana kwani itatoa fursa kwa wanachama kupata ufafanuzi wa masuala mbalimbali yaliyojadiliwa katika Mkutano Mkuu na pia kutoa maoni yao juu ya utekelezaji wa maamuzi yaliyofikiwa.</p>
      <p>Wanachama wote wanashauriwa kuhudhuria mikutano hii ili kujionea wenyewe maendeleo ya Chama na kushiriki katika kufanya maamuzi muhimu kwa ajili ya ustawi wa Chama chetu.</p>
    `
  },
  {
    id: 6,
    date: "March 13, 2024",
    title: "TANGAZO LA MIKUTANO YA MREJESHO NA TAARIFA KWA WANACHAMA MATAWINI-2024",
    excerpt: "Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023...",
    content: `
      <p>Chama kinawatangazia Wanachama wote kuwa, kinatarajia kuanza kufanya Mikutano ya Mrejesho wa Mkutano Mkuu wa mwaka 2023 katika matawi yake nchi nzima kuanzia tarehe 16.03.2024 ili kuwajulisha juu ya maamuzi yaliyofikiwa na kuwapatia taarifa mbalimbali.</p>
      <p>Mikutano hii ni muhimu sana kwani itatoa fursa kwa wanachama kupata ufafanuzi wa masuala mbalimbali yaliyojadiliwa katika Mkutano Mkuu na pia kutoa maoni yao juu ya utekelezaji wa maamuzi yaliyofikiwa.</p>
      <p>Wanachama wote wanashauriwa kuhudhuria mikutano hii ili kujionea wenyewe maendeleo ya Chama na kushiriki katika kufanya maamuzi muhimu kwa ajili ya ustawi wa Chama chetu.</p>
    `
  },
]);

const showModal = ref(false);
const selectedPost = ref(null);

const openModal = (post) => {
  selectedPost.value = post;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style>


.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Additional styles for the modal content */
.prose {
  @apply text-gray-800;
}
.prose p {
  @apply mb-4;
}
</style>