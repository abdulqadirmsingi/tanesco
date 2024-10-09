<!-- ServicesPage.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-5xl font-bold text-emerald-800 mb-12 text-center">Huduma Zetu</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" 
             class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div class="relative h-64 overflow-hidden">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover transition duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <button class="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-emerald-800 mb-2">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Irrigation System",
          description: "Efficient water management solutions for your landscape.",
          image: "/api/placeholder/600/400",
        },
        {
          id: 2,
          title: "Garden Express",
          description: "Quick and professional garden maintenance services.",
          image: "/api/placeholder/600/400",
        },
        {
          id: 3,
          title: "Hardscaping",
          description: "Create stunning outdoor living spaces with our expert hardscaping.",
          image: "/api/placeholder/600/400",
        },
        {
          id: 4,
          title: "Spring Cleanup",
          description: "Revitalize your landscape after winter with our thorough spring cleanup.",
          image: "/api/placeholder/600/400",
        },
        {
          id: 5,
          title: "Lawn and Garden Care",
          description: "Comprehensive care to keep your lawn and garden thriving year-round.",
          image: "/api/placeholder/600/400",
        },
        {
          id: 6,
          title: "Snow Cleaning",
          description: "Reliable snow removal services to keep your property safe and accessible.",
          image: "/api/placeholder/600/400",
        },
        {
          id: 7,
          title: "Design Planning",
          description: "Transform your outdoor space with our expert landscape design services.",
          image: "/api/placeholder/600/400",
        }
      ]
    };
  }
};
</script>