<template>
  <div class="leader-card bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
    <div class="relative pb-full">
      <img :src="leader.image" :alt="leader.name" class="absolute inset-0 w-full h-full object-cover object-center">
      <div class="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800 to-transparent opacity-70"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 class="text-xl font-bold leading-tight">{{ leader.name }}</h3>
        <p class="text-sm text-green-200">{{ leader.title }}</p>
      </div>
    </div>
    <div class="p-4 bg-green-50">
      <div class="flex justify-center space-x-4">
        <a v-if="leader.social.linkedin" :href="leader.social.linkedin" target="_blank" rel="noopener noreferrer" 
           class="text-green-700 hover:text-green-900 transition-colors duration-200">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
          </svg>
        </a>
        <a v-if="leader.social.twitter" :href="leader.social.twitter" target="_blank" rel="noopener noreferrer" 
           class="text-green-700 hover:text-green-900 transition-colors duration-200">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  leader: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.pb-full {
  padding-bottom: 100%;
}
</style>