import { createRouter, createWebHistory } from 'vue-router';
import SignupLayout from '@/components/SignupLayout.vue';
import PersonalInfoView from '@/views/PersonalInfoView.vue';
import SelectPlan from '@/views/SelectPlanView.vue';
import PickAddOns from '@/views/PickAddOnsView.vue';
import { useStepValidation } from '@/stores/stepValidation';

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
            const stepValidationStore = useStepValidation();
            if (stepValidationStore.validateStep1()) {
              next();
            } else {
              return false;
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
