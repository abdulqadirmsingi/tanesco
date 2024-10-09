<template>
  <footer class="bg-gradient-to-r from-green-700 to-emerald-800 text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div class="flex flex-col space-y-4">
          <div class="flex items-center space-x-4">
            <img
              width="60"
              height="60"
              class="w-15 h-15"
              src="/images/tanesco.png"
              alt="Tanesco Logo"
            />
            <span class="text-2xl font-bold">Tanesco</span>
          </div>
          <p class="text-sm text-green-100">
            We are the Tanzania Electric Supply Company Limited, committed to providing reliable and affordable electricity to power Tanzania's growth and development.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="(icon, name) in socialIcons"
              :key="name"
              :href="`https://www.${name}.com/`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-green-200 hover:text-white transition-colors duration-300"
            >
              <i :class="`text-xl ${icon}`"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Kurasa</h3>
          <ul class="space-y-2">
            <li v-for="item in ['Mwanzo', 'Kuhusu-sisi', 'Mikopo', 'Machapisho', 'Maswali']" :key="item">
              <RouterLink
                :to="item === 'Mwanzo' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`"
                class="text-green-200 hover:text-white transition-colors duration-300"
              >
                {{ item }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Mikopo</h3>
          <ul class="space-y-2">
            <li v-for="item in ['Bidhaa za Bosa', 'Bidhaa za FOSA', 'Loan Calculator']" :key="item">
              <RouterLink
                :to="item === 'Bidhaa za Bosa' || item == 'Bidhaa za FOSA' ? '/mikopo' : `/${item.toLowerCase().replace(' ', '-')}`"
                class="text-green-200 hover:text-white transition-colors duration-300"
              >
                {{ item }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <div class="flex items-center space-x-3 mb-3">
            <i class="pi pi-phone text-green-300"></i>
            <div>
              <p class="text-sm text-green-200">Customer Support: 24/7</p>
              <p class="font-bold">+255 22 245 1128</p>
            </div>
          </div>
          <div class="flex items-center space-x-3 mb-4">
            <i class="pi pi-map-marker text-green-300"></i>
            <p class="text-sm text-green-200">
              Umeme Park, Ubungo, Morogoro Road, P.O. Box 9024, Dar es Salaam, Tanzania
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-green-600 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-green-200 mb-4 sm:mb-0">
          ©{{ new Date().getFullYear() }} Tanzania Electric Supply Company Limited (TANESCO). All Rights Reserved.
        </p>
        <div class="flex flex-wrap justify-center sm:justify-end space-x-4">
          <a
            v-for="item in ['Terms Of Service', 'Privacy Policy', 'Cookie Policy']"
            :key="item"
            href="#!"
            class="text-sm text-green-200 hover:text-white transition-colors duration-300"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    const socialIcons = {
      facebook: 'pi pi-facebook',
      linkedin: 'pi pi-linkedin',
      twitter: 'pi pi-twitter',
      instagram: 'pi pi-instagram',
      youtube: 'pi pi-youtube',
    };

    return {
      socialIcons
    };
  }
});
</script>

<style scoped>
@import 'primeicons/primeicons.css';

.container {
  max-width: 1200px;
  margin: 0 auto;
}
a, i {
  transition: all 0.3s ease;
}

@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>