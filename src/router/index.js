import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KuhusuView from '@/views/KuhusuView.vue';
import HabariView from '@/views/HabariView.vue';
import MaswaliView from '@/views/MaswaliView.vue';
import FomuView from '@/views/FomuView.vue';
import MawasilianoView from '@/views/MawasilianoView.vue';
import MachapishoView from '@/views/MachapishoView.vue';
import MikopoView from '@/views/MikopoView.vue';
import StaffmailView from '@/views/StaffmailView.vue';
import UtawalaView from '@/views/UtawalaView.vue';
import PrivacyView from '@/views/PrivacyView.vue';
import HudumaView from '@/views/HudumaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kuhusu-sisi",
      name: "kuhusu",
      component: KuhusuView,
    },
    {
      path: "/habari",
      name: "habari",
      component: HabariView,
    },
    {
      path: "/maswali",
      name: "maswali",
      component: MaswaliView,
    },
    {
      path: "/fomu",
      name: "fomu",
      component: FomuView,
    },
    {
      path: "/mawasiliano",
      name: "mawasiliano",
      component: MawasilianoView,
    },
    {
      path: "/machapisho",
      name: "machapisho",
      component: MachapishoView,
    },
    {
      path: "/mikopo",
      name: "mikopo",
      component: MikopoView,
    },
    {
      path: "/staff-mail",
      name: "staff-mail",
      component: StaffmailView,
    },
    {
      path: "/utawala",
      name: "utawala",
      component: UtawalaView,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyView,
    },
    {
      path: "/huduma",
      name: "huduma",
      component: HudumaView,
    },
  ],
});

export default router
