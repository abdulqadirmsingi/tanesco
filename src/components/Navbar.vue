<!-- Navbar.vue -->
<template>
  <nav class="bg-green-700 shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0">
          <RouterLink to="/"><img class="h-16 w-auto" src="/images/logooo.png" alt="TANESCO"></RouterLink>
          
        </div>
        <div class="hidden md:flex md:items-center md:space-x-1">
          <div v-for="(item, index) in navItems" :key="index" class="relative group">
            <RouterLink v-if="!item.dropdownItems" 
               :to="item.href"
               class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:text-white focus:bg-green-600 transition duration-200 ease-in-out inline-block">
              {{ item.name }}
            </RouterLink>
            <div v-else class="relative group">
              <button @mouseenter="openDropdown = index"
                      @mouseleave="openDropdown = null"
                      class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:text-white focus:bg-green-600 transition duration-200 ease-in-out group inline-flex items-center">
                {{ item.name }}
                <svg class="ml-1 h-5 w-5 text-white transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div @mouseenter="openDropdown = index"
                   @mouseleave="openDropdown = null"
                   :class="{'opacity-100 translate-y-0 visible': openDropdown === index, 'opacity-0 translate-y-1 invisible': openDropdown !== index}"
                   class="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out">
                <div class="py-1">
                  <RouterLink v-for="dropdownItem in item.dropdownItems" 
                     :key="dropdownItem.name"
                     :to="dropdownItem.href"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-150 ease-in-out">
                    {{ dropdownItem.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                  class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 focus:text-white transition duration-200 ease-in-out">
            <svg :class="{'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg :class="{'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-for="(item, index) in navItems" :key="index">
          <RouterLink v-if="!item.dropdownItems" 
             :to="item.href"
             class="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 focus:outline-none focus:text-white focus:bg-green-600 transition duration-200 ease-in-out">
            {{ item.name }}
          </RouterLink>
          <div v-else>
            <button @click="toggleMobileDropdown(index)"
                    class="text-white w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-green-600 focus:outline-none focus:text-white focus:bg-green-600 transition duration-200 ease-in-out flex justify-between items-center">
              {{ item.name }}
              <svg :class="{'rotate-180': openMobileDropdown === index}" class="ml-1 h-5 w-5 text-white transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div v-show="openMobileDropdown === index" class="mt-2 space-y-2 px-4">
              <RouterLink v-for="dropdownItem in item.dropdownItems" 
                 :key="dropdownItem.name"
                 :to="dropdownItem.href"
                 class="text-white block py-2 text-base font-medium hover:bg-green-600 transition duration-200 ease-in-out">
                {{ dropdownItem.name }}
              </RouterLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMobileMenuOpen: false,
      openDropdown: null,
      openMobileDropdown: null,
      navItems: [
        { name: 'Mwanzo', href: '/' },
        { 
          name: 'Kuhusu', 
          dropdownItems: [
            { name: 'Kuhusu Sisi', href: '/kuhusu-sisi' },
            { name: 'Utawala', href: '/utawala' },
            { name: 'Huduma', href: '/huduma' },
            { name: 'Privacy', href: '/privacy' }
          ]
        },
        { 
          name: 'Mikopo', 
          dropdownItems: [
            { name: 'Bidhaa za BOSA', href: '/mikopo' },
            // { name: 'Masharti', href: '#' },
            { name: 'Bidhaa za FOSA', href: '/mikopo' }
          ]
        },
        { 
          name: 'Fomu', 
          dropdownItems: [
            { name: 'Fomu Za Mikopo Ya BOSA', href: '/fomu' },
            { name: 'Fomu Za Mikopo Ya FOSA', href: '/fomu' },
            { name: 'FOSA operation', href: '/fomu' }
          ]
        },
        { name: 'Machapisho', href: '/machapisho' },
        { name: 'Habari', href: '/habari' },
        { name: 'Maswali', href: '/maswali' },
        { name: 'Mawasiliano', href: '/mawasiliano' },
        { name: 'Staff mail', href: '/staff-mail' },
      ],
    };
  },
  methods: {
    toggleMobileDropdown(index) {
      this.openMobileDropdown = this.openMobileDropdown === index ? null : index;
    }
  }
};
</script>