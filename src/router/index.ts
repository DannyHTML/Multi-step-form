import { createRouter, createWebHistory } from 'vue-router';
import SignupLayout from '@/components/SignupLayout.vue';
import PersonalInfoView from '@/views/PersonalInfoView.vue';
import SelectPlan from '@/views/SelectPlan.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/signup/personal-info',
    },
    {
      path: '/signup',
      component: SignupLayout,
      children: [
        {
          path: 'personal-info',
          name: 'PersonalInfo',
          component: PersonalInfoView,
        },
        {
          path: 'select-plan',
          name: 'SelectPlan',
          component: SelectPlan,
        },
      ],
    },
  ],
});

export default router;
