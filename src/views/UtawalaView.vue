<template>
  <div class="bg-gradient-to-br from-green-50 to-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <h1 class="text-5xl font-bold text-center text-green-800 mb-16">Muundo wa Utawala</h1>
    
    <div class="max-w-7xl mx-auto relative">
      <!-- Mwenyekiti -->
      <div class="flex justify-center mb-24">
        <LeaderCard :leader="leaders[0]" class="w-80 z-10" />
      </div>
      
      <!-- Second Tier -->
      <div class="flex justify-center space-x-16 mb-24">
        <LeaderCard v-for="leader in leaders.slice(1, 3)" :key="leader.id" :leader="leader" class="w-72 z-10" />
      </div>
      
      <!-- Third Tier -->
      <div class="flex justify-center flex-wrap gap-12 mb-24">
        <LeaderCard v-for="leader in leaders.slice(3, 7)" :key="leader.id" :leader="leader" class="w-64 z-10" />
      </div>
      
      <!-- Fourth Tier -->
      <div class="flex justify-center space-x-12">
        <LeaderCard v-for="leader in leaders.slice(7)" :key="leader.id" :leader="leader" class="w-60 z-10" />
      </div>
      
      <!-- Connections -->
      <svg class="absolute top-0 left-0 w-full h-full" style="z-index: 1;">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
          </marker>
        </defs>
        <g class="connections"></g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LeaderCard from '@/components/LeaderCard.vue';

const leaders = ref([
  { id: 1, name: 'Omary Shaaban', title: 'Mwenyekiti', image: '/images/mwenyekiti.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 2, name: 'Edna Mfupa', title: 'Makamu Mwenyekiti', image: '/images/makamu.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 3, name: 'Goodluck Mwinuka', title: 'Mjumbe', image: '/images/mjumbe.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 4, name: 'Acheni Nampanga', title: 'Mjumbe', image: '/images/mjumbe2.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 5, name: 'Senkondo Mchovu', title: 'Mjumbe', image: '/images/mjumbe3.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 6, name: 'Clement Mwakalosi', title: 'Mjumbe', image: '/images/mjumbe4.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 7, name: 'Renatus Mfilinge', title: 'Mjumbe', image: '/images/mjumbe5.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 8, name: 'Martha Nyalusi', title: 'Mjumbe', image: '/images/mjumbe6.jpg', social: { linkedin: '#', twitter: '#' } },
  { id: 9, name: 'Maimunah Soka', title: 'Mjumbe', image: '/images/mjumbe7.jpg', social: { linkedin: '#', twitter: '#' } },
]);

onMounted(() => {
  drawConnections();
  window.addEventListener('resize', drawConnections);
});

function drawConnections() {
  const svg = document.querySelector('svg g.connections');
  svg.innerHTML = '';
  const cards = document.querySelectorAll('.leader-card');
  
  for (let i = 0; i < cards.length - 1; i++) {
    const card1 = cards[i].getBoundingClientRect();
    const card2 = cards[i + 1].getBoundingClientRect();
    
    const x1 = card1.left + card1.width / 2;
    const y1 = card1.bottom;
    const x2 = card2.left + card2.width / 2;
    const y2 = card2.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('d', `M${x1},${y1} C${x1},${(y1+y2)/2} ${x2},${(y1+y2)/2} ${x2},${y2}`);
    line.setAttribute('stroke', '#10B981');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('fill', 'none');
    line.setAttribute('marker-end', 'url(#arrowhead)');
    svg.appendChild(line);
  }
}
</script>

<style scoped>
.leader-card {
  transition: all 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>