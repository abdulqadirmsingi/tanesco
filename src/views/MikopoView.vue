<template>
  <div class="bg-white min-h-screen font-sans">
    <header class=" text-green-700 py-6 ">
      <h1 class="text-4xl font-bold text-center">Aina za Mikopo</h1>
    </header>
    <main class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div v-for="category in loanCategories" :key="category.name" class="bg-green-50 rounded-lg shadow-md overflow-hidden">
          <h2 class="text-2xl font-bold bg-green-600 text-white p-4">{{ category.name }}</h2>
          <div class="p-4">
            <div v-for="loan in category.loans" :key="loan.name" class="mb-6">
              <div 
                @click="toggleLoan(loan)"
                class="flex justify-between items-center bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-green-100 transition-colors duration-200"
              >
                <h3 class="text-xl font-semibold text-green-800">{{ loan.name }}</h3>
                <i :class="['pi', loan.isOpen ? 'pi-chevron-down' : 'pi-chevron-right', 'text-green-600']"></i>
              </div>
              <div v-if="loan.isOpen" class="mt-4 bg-white p-4 rounded-lg shadow-inner">
                <ul class="list-disc list-inside space-y-2">
                  <li v-for="detail in loan.details" :key="detail" class="text-gray-700">
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loanCategories = ref([
  {
    name: 'Bidhaa za BOSA',
    loans: [
      {
        name: 'Mkopo wa Maendeleo',
        isOpen: false,
        details: [
          'Mwanachama ana uhuru wa kukopa kiwango ambacho hakizidi mara nne (4) ya akiba.',
          'Mwanachama ataruhusiwa kukopa tena iwapo atakuwa amemaliza mkopo wa awali, au amerejesha moja ya tatu (1/3) la deni la awali.',
          'Kiwango cha juu cha mkopo kitategemea uwezo wa mshahara wa mwanachama husika.',
          'Riba kwa mkopo wa maendeleo ni asilimia 1.0 kwa mwezi kwa baki ya mkopo.',
          'Muda wa juu wa marejesho ya mkopo ni miezi sitini (60).'
        ]
      },
      {
        name: 'Mkopo wa Elimu',
        isOpen: false,
        details: [
          'Kiwango cha mkopo wa Elimu hakitazidi mara tatu ya mshahara wa mwanachama.',
          'Riba ya mkopo wa Elimu ni asilimia tano (5% flat rate) ya kiwango cha mkopo.',
          'Makato kwa mkopo wa Elimu yatafanyika kwa kipindi kisichozidi miezi kumi na mbili.'
        ]
      },
      {
        name: 'Mkopo wa Dharura',
        isOpen: false,
        details: [
          'Mkopo huu utatolewa kwa wanachama kwa kisichozidi Tshs. 3,000,000.00.',
          'Mkopo wa dharura hautatolewa kwa mwanachama ambae atakuwa bado hajamaliza mkopo wa awali.',
          'Riba kwa mikopo ya dharura itakuwa asilimia 2 kwa mwezi kwa baki ya mkopo.'
        ]
      },
      {
        name: 'Mkopo wa Papo kwa Papo',
        isOpen: false,
        details: [
          'Utatolewa kwa kiwango cha kuanzia Tshs. 50,000.00 hadi Tshs. 300,000.00 kuanzia tarehe 10 hadi 20 ya kila mwezi.',
          'Makato ya marejesho ya mkopo huu yatafanyika mwezi unaofuata kwa mkupuo mmoja.',
          'Riba ya mkopo wa papo kwa hapo ni asilimia 08.'
        ]
      }
    ]
  },
  {
    name: 'Bidhaa za FOSA',
    loans: [
      {
        name: 'Mkopo wa Boresha Maisha',
        isOpen: false,
        details: [
          'Mwanachama ana uhuru wa kukopa kiwango huru kinachokatika.',
          'Riba ya mkopo huu itakuwa asilimia 1.0 kwa mwezi kwa baki ya mkopo.',
          'Kiwango cha juu cha mkopo kitakuwa Tshs. milioni thelathini.',
          'Muda wa juu wa marejesho ya mkopo ni miezi sitini (60).',
          'Mwanachama ataruhusiwa kukopa tena iwapo atakuwa amemaliza mkopo wa awali, au amerejesha nusu (1/2) ya deni la awali.',
          'Mkopo huu utaweza kununua madeni ya taasisi nyingine za fedha.'
        ]
      },
      {
        name: 'Mkopo wa Chipukizi',
        isOpen: false,
        details: [
          'Mkopo huu utatolewa kwa Mwanachama ambaye ameajiriwa ndani ya kipindi cha miezi 12.',
          'Riba ya mkopo huu itakuwa asilimia 1.3 kwa mwezi kwa baki ya mkopo.',
          'Mwanachama anaweza kukopa kiwango ambacho hakizidi mara tano (5) ya mshahara halisi wa mwezi.',
          'Muda wa juu wa marejesho ya mkopo ni miezi ishirini na nne (24) kwa wafanyakazi wa kudumu na miezi kumi na mbili (12) kwa wafanyakazi wa mkataba wa muda maalum.'
        ]
      },
      {
        name: 'Mkopo wa Usafiri',
        isOpen: false,
        details: [
          'Mwanachama anaweza ku-top up mkopo wa gari baada ya kulipa nusu ya thamani ya mkopo wa awali kwa kuagiza gari jingine.',
          'Mwanachama anaweza kukopa chombo cha usafiri kupitia mawakala wa Be Forward au SBT Tanzania.',
          'Kiwango cha mkopo kisichozidi shilingi milioni hamsini (Tshs. 50,000,000).',
          'Riba ya mkopo huu itakuwa asilimia 9.6 kwa mwaka (reducing balance).',
          'Marejesho ya mkopo huu yatafanyika ndani ya miezi arobaini na nane (48).',
          'Marejesho ya Mkopo huu yatafanyika kupitia Akaunti yake ya FOSA.'
        ]
      },
      {
        name: 'Mkopo wa Wekeza',
        isOpen: false,
        details: [
          'Mwanachama anaweza kukopa mpaka mara mbili (2) ya kiasi cha hisa za hiyari.',
          'Riba ya mkopo huu itakuwa asilimia 8 kwa mwaka (flat rate).',
          'Mwanachama ataruhusiwa kukopa tena iwapo atakuwa amemaliza mkopo wa awali.',
          'Marejesho ya mkopo huu yatafanyika ndani ya miezi kumi na mbili (12).',
          'Marejesho ya Mkopo huu yatafanyika kupitia Akaunti yake ya FOSA.'
        ]
      },
      {
        name: 'Mkopo wa Vifaa',
        isOpen: false,
        details: [
          'Mwanachama anaweza kukopa kifaa cha nyumbani au Kieletroniki kupitia Wakala/Watoa Huduma walioingia Mkataba na Chama.',
          'Kiwango cha juu cha Mkopo huu Hakitazidi shilingi Milioni tano (5,000,000).',
          'Riba ya Mkopo huu itakua asilimia 1.4 kwa mwezi (Reducing Balance).',
          'Marejehso ya Mkopo huu yatafanyika ndani ya Miezi kumi na mbili (12).',
          'Marejesho ya Mkopo huu yatafanyika Kupitia Akaunti yake ya FOSA.'
        ]
      },
      {
        name: 'Mkopo wa Bima ya Gari',
        isOpen: false,
        details: [
          'Mwanachama anaweza kuomba mkopo wa bima ya gari kulingana na thamani ya gari yake.',
          'Bima hii inaweza kuwa bima kubwa (comprehensive) au bima ndogo (third party).',
          'Riba kwa mikopo ya Bima ya gari itakuwa asilimia 2 kwa mwezi kwa baki ya mkopo.',
          'Marejesho ya mkopo huu yatafanyika ndani ya muda wa miezi kumi na mbili (12).',
          'Chama kinashirikiana na Kampuni ya Jubilee Insurance (Tanzania).',
          'Mwanachama anaweza kukata bima ya gari ya ndugu au rafiki yake.'
        ]
      },
      {
        name: 'Mkopo wa Likizo',
        isOpen: false,
        details: [
          'Mwanachama anaweza kukopa mara mbili (2) ya amana ya Likizo.',
          'Riba ya mkopo huu itakuwa asilimia 8 kwa mwaka (flat rate).',
          'Marejesho ya mkopo huu yatafanyika ndani ya muda wa miezi kumi na mbili (12).',
          'Marejesho ya Mkopo huu yatafanyika kupitia Akaunti yake ya FOSA.'
        ]
      },
      {
        name: 'Mkopo wa Matibabu',
        isOpen: false,
        details: [
          'Mwanachama anaweza kukopa mara mbili (2) ya amana ya Likizo.',
          'Riba ya mkopo huu itakuwa asilimia 8 kwa mwaka (flat rate).',
          'Marejesho ya mkopo huu yatafanyika ndani ya muda wa miezi kumi na mbili (12).',
          'Marejesho ya Mkopo huu yatafanyika kupitia Akaunti yake ya FOSA.'
        ]
      },
      {
        name: 'Mkopo wa Ujasiriamali',
        isOpen: false,
        details: [
          'Mwanachama anaweza kukopa kiwango kisichozidi Tshs. 10,000,000.',
          'Riba ya mkopo huu itakuwa asilimia 1.375 kwa mwezi kiasi cha mkopo.',
          'Muda wa juu wa marejesho ya mkopo ni miezi ishirini na nne (24).',
          'Marejesho yataanza kufanyika miezi mitatu baada ya mkopo kutolewa (grace period).',
          'Mwanachama atatakiwa kuwasilisha: Mpango wa biashara (lazima), leseni ya biashara, usajili wa biashara.'
        ]
      }
    ]
  }
]);

const toggleLoan = (loan) => {
  loan.isOpen = !loan.isOpen;
};
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
@import 'primeicons/primeicons.css';

/* Additional custom styles can be added here if needed */
</style>