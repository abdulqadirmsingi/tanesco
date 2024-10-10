<!-- TopNav.vue -->
<template>
  <div class="bg-black text-white py-2 px-4 transition-all duration-300 ease-in-out">
    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <!-- Email and Phone Section -->
        <div class="flex flex-row items-center mb-2 sm:mb-0 flex-wrap justify-center">
          <a href="mailto:info@tanesco.co.tz" class="text-sm hover:text-green-300 transition duration-300 flex items-center mb-2 sm:mb-0 mr-4">
            <i class="pi pi-envelope mr-2"></i>
            <span>info@tanesco.co.tz</span>
          </a>
          <a href="tel:+255222451159" class="text-sm hover:text-green-300 transition duration-300 flex items-center">
            <i class="pi pi-phone mr-2"></i>
            <span>+255 22 245 1159</span>
          </a>
        </div>
        <!-- Social Icons Section -->
        <div class="flex items-center space-x-4 mt-2 sm:mt-0">
          <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.href" class="hover:text-green-300 transition duration-300">
            <i :class="icon.class" class="text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      socialIcons: [
        { href: '#', class: 'pi pi-facebook' },
        { href: '#', class: 'pi pi-twitter' },
        { href: '#', class: 'pi pi-instagram' },
        { href: '#', class: 'pi pi-linkedin' },
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 639px) {
  .container {
    width: 100%;
  }

  .flex-col > * {
    width: 100%;
    text-align: center;
  }

  .space-x-4 {
    justify-content: center;
  }
}
</style>