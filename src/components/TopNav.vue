<!-- TopNav.vue -->
<template>
  <div class="bg-black text-white py-2 px-4 transition-all duration-300 ease-in-out">
    <div class="container mx-auto">
      <div class="flex flex-row justify-between items-center flex-wrap">
        <!-- Email and Phone Section -->
        <div class="flex flex-row items-center">
          <a href="mailto:info@tanesco.co.tz" class="text-sm sm:text-base hover:text-green-300 transition duration-300 flex items-center mr-4">
            <i class="pi pi-envelope mr-2"></i>
            <span>info@tanesco.co.tz</span>
          </a>
          <a href="tel:+255222451159" class="text-sm sm:text-base hover:text-green-300 transition duration-300 flex items-center">
            <i class="pi pi-phone mr-2"></i>
            <span>+255 22 245 1159</span>
          </a>
        </div>
        <!-- Social Icons Section -->
        <div class="flex items-center space-x-4">
          <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.href" class="hover:text-green-300 transition duration-300">
            <i :class="icon.class" class="text-lg sm:text-xl"></i>
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
/* Ensure the layout stays in one row with flex wrap */
@media (max-width: 640px) {
  .flex-row {
    flex-wrap: wrap; /* Enable wrapping to prevent overflow */
  }

  /* Adjust spacing and text scaling on smaller screens */
  .text-sm {
    font-size: 0.875rem;
  }

  .text-base {
    font-size: 1rem;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  /* Make sure icons and items don't crowd */
  .space-x-4 {
    gap: 0.75rem; /* Slightly smaller spacing for icons on small screens */
  }

  /* Add padding around the container for better spacing on mobile */
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
