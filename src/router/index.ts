import { createRouter, createWebHistory } from 'vue-router';
import SignupLayout from '@/components/SignupLayout.vue';
import PersonalInfoView from '@/views/PersonalInfoView.vue';
import SelectPlan from '@/views/SelectPlanView.vue';
import PickAddOns from '@/views/PickAddOnsView.vue';
import SummaryView from '@/views/SummaryView.vue';
import { useStepValidation } from '@/stores/stepValidation';

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
        {
          path: 'pick-add-ons',
          name: 'PickAddOns',
          component: PickAddOns,
        },
        {
          path: 'summary',
          name: 'Summary',
          component: SummaryView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const stepValidationStore = useStepValidation();

  if (!to.path.startsWith('/signup')) {
    return next();
  }

  if (to.name === 'PersonalInfo') {
    return next();
  }

  // Block access to later steps if step 1 is invalid
  if (!stepValidationStore.validateStep1()) {
    return next({ name: 'PersonalInfo' });
  }

  next();
});

export default router;
