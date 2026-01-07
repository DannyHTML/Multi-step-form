import { createRouter, createWebHistory } from 'vue-router';
import PersonalInfoView from '../views/PersonalInfoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoView,
      children: [
        {
          path: '/select-plan',
          component: () => import('@/views/SelectPlan.vue'),
        },
      ],
    },
  ],
});

export default router;
