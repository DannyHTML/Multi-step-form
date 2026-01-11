import { createRouter, createWebHistory } from 'vue-router';
import SignupLayout from '@/components/SignupLayout.vue';
import PersonalInfoView from '@/views/PersonalInfoView.vue';
import SelectPlan from '@/views/SelectPlanView.vue';
import PickAddOns from '@/views/PickAddOnsView.vue';
import { useFormStore } from '@/stores/form';

// TODO: Add route guards to protect the signup steps.
// TODO: Also, remove the goNext/goPrev function from App.vue and handle navigation here instead.
// TODO: Make this cleaner using a navigation store???.

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
          beforeEnter: (to, from, next) => {
            const formStore = useFormStore();
            if (formStore.validateStep1()) {
              console.log('Step 1 validated, proceeding to Step 2');
              next();
            } else {
              console.log('Step 1 validation failed, redirecting to Step 1');
              next('/signup/personal-info');
            }
          },
        },
        {
          path: 'pick-add-ons',
          name: 'PickAddOns',
          component: PickAddOns,
        },
      ],
    },
  ],
});

export default router;
