<!-- MachapishoPage.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-green-800 mb-8 text-center">Machapisho</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(doc, index) in documents" :key="index" 
             class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div class="p-6 flex items-center space-x-4">
            <div class="flex-shrink-0">
              <i :class="['pi', getIconClass(doc.type), 'text-4xl text-green-600']"></i>
            </div>
            <div class="flex-grow">
              <h2 class="text-xl font-semibold text-green-800 mb-2">{{ doc.title }}</h2>
              <p class="text-gray-600 text-sm">{{ doc.description }}</p>
            </div>
          </div>
          <div class="bg-green-100 px-6 py-4">
            <a :href="doc.filePath" :download="doc.fileName" 
               class="flex items-center justify-center space-x-2 text-green-700 hover:text-green-900 transition duration-300">
              <i class="pi pi-download"></i>
              <span>Pakua</span>
            </a>
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
      documents: [
        { 
          title: 'Sifa za Mwakilishi', 
          type: 'pdf', 
          description: 'Maelezo kuhusu sifa zinazohitajika kwa mwakilishi.',
          fileName: 'sifa_za_mwakilishi.pdf',
          filePath: '/documents/sifa_za_mwakilishi.pdf'
        },
        { 
          title: 'Masharti ya Chama', 
          type: 'doc', 
          description: 'Orodha ya masharti ya kujiunga na chama.',
          fileName: 'masharti_ya_chama.docx',
          filePath: '/documents/masharti_ya_chama.docx'
        },
        { 
          title: 'Tangazo la Mkutano Mkuu 2023', 
          type: 'pdf', 
          description: 'Taarifa rasmi ya mkutano mkuu wa mwaka 2023.',
          fileName: 'tangazo_mkutano_2023.pdf',
          filePath: '/documents/tangazo_mkutano_2023.pdf'
        },
        { 
          title: 'Barua ya Uchaguzi 2023', 
          type: 'doc', 
          description: 'Maelezo kuhusu mchakato wa uchaguzi wa 2023.',
          fileName: 'barua_uchaguzi_2023.docx',
          filePath: '/documents/barua_uchaguzi_2023.docx'
        },
        { 
          title: 'Fomu ya Kugombea Uongozi', 
          type: 'pdf', 
          description: 'Fomu rasmi ya kujitokeza kugombea nafasi ya uongozi.',
          fileName: 'fomu_kugombea_uongozi.pdf',
          filePath: '/documents/fomu_kugombea_uongozi.pdf'
        },
        { 
          title: 'Sera ya Mikopo', 
          type: 'pdf', 
          description: 'Maelezo ya kina kuhusu sera za mikopo za chama.',
          fileName: 'sera_ya_mikopo.pdf',
          filePath: '/documents/sera_ya_mikopo.pdf'
        },
        { 
          title: 'Mrejesho booklet 2023', 
          type: 'pdf', 
          description: 'Kitabu cha mrejesho wa shughuli za chama kwa mwaka 2023.',
          fileName: 'mrejesho_booklet_2023.pdf',
          filePath: '/documents/mrejesho_booklet_2023.pdf'
        }
      ]
    }
  },
  methods: {
    getIconClass(type) {
      switch(type) {
        case 'pdf': return 'pi-file-pdf';
        case 'doc': return 'pi-file-word';
        default: return 'pi-file';
      }
    }
  }
}
</script>

<style scoped>
@import 'primeicons/primeicons.css';
</style>