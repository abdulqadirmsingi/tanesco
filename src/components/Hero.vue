<template>
  <section class="relative h-screen bg-gray-100">
    <div class="absolute inset-0 overflow-hidden">
      <transition-group 
        name="fade" 
        tag="div" 
        class="h-full"
      >
        <div 
          v-for="(slide, index) in slides" 
          :key="slide.id" 
          v-show="currentSlide === index" 
          class="absolute inset-0 w-full h-full"
        >
          <img 
            :src="slide.image" 
            :alt="slide.title" 
            class="object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </transition-group>
    </div>
    
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
      <h1 class="mb-4 text-5xl font-bold leading-tight">
        {{ slides[currentSlide].title }}
      </h1>
      <p class="mb-8 text-xl">
        {{ slides[currentSlide].description }}
      </p>
      <RouterLink
        href="/kuhusu-sisi" 
        class="px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 bg-green-800 rounded-full hover:bg-blue-700"
      >
        Kuhusu Sisi
      </RouterLink>
    </div>
    
    <div class="absolute bottom-0 left-0 right-0 z-10 flex justify-center p-4">
      <button 
        v-for="(slide, index) in slides" 
        :key="slide.id" 
        @click="currentSlide = index" 
        class="w-3 h-3 mx-2 rounded-full focus:outline-none"
        :class="currentSlide === index ? 'bg-white' : 'bg-gray-400'"
      ></button>
    </div>
    
    <button 
      @click="prevSlide" 
      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide" 
      class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75 transition-colors duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          id: 1,
          title: "Karibu Tanesco-Saccos!",
          description: "Pata huduma haraka kupitia sisi, huduma zenye viwango bora",
          image: "/images/tanesco-1.jpg",
        },
        {
          id: 2,
          title: "Miaka 54 ya utoaji wa Huduma Ya Mikopo",
          description: "Tuna uzoefu wa miaka 54 ya utoaji huduma ya mikopo, na bado tunaendelea",
          image: "/images/tanesco-2.jpg",
        },
        {
          id: 3,
          title: "Huduma Kiganjani",
          description: "Tanesco-Saccos tumeondoa tabu ya kututafuta kwa kuweka huduma kiganjani",
          image: "/images/tanesco-3.jpg",
        },
        {
          id: 4,
          title: "Utoaji wa Mikopo kwa Nafuu",
          description: "Tunatoa mikopo kwa nafuu, bila kumuumiza mteja wetu",
          image: "/images/tanesco-4.jpg",
        },
        {
          id: 5,
          title: "Tunaboresha Hali ya Uchumi",
          description: "Tanesco Saccos tumejikita na kuboresha hali ya Uchumi wa Jamii",
          image: "/images/tanesco-5.jpg",
        },
        {
          id: 6,
          title: "Join Our Community",
          description: "Connect with like-minded professionals",
          image: "/images/tanesco-6.jpg",
        },
        {
          id: 7,
          title: "Join Our Community",
          description: "Connect with like-minded professionals",
          image: "/images/tanesco-7.jpg",
        },
        {
          id: 8,
          title: "Join Our Community",
          description: "Connect with like-minded professionals",
          image: "/images/tanesco-8.jpg",
        },
        {
          id: 9,
          title: "Join Our Community",
          description: "Connect with like-minded professionals",
          image: "/images/tanesco-9.jpg",
        },
        {
          id: 10,
          title: "Join Our Community",
          description: "Connect with like-minded professionals",
          image: "/images/tanesco-10.jpg",
        },
        {
          id: 11,
          title: "Join Our Community",
          description: "Connect with like-minded professionals",
          image: "/images/tanesco-11.jpg",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 5000);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>