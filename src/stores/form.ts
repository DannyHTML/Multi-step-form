// stores/form.ts
import { reactive, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Plans } from '@/types/plans';
import type { AddOns } from '@/types/addOns';

export const useFormStore = defineStore('form', () => {
  const formData = reactive({
    name: '',
    email: '',
    phone: '',
    errors: {
      name: '',
      email: '',
      phone: '',
    } as Record<string, string>,
  });

  const plans: readonly Plans[] = [
    { id: 'arcade', name: 'Arcade', monthly: 9, yearly: 90 },
    { id: 'advanced', name: 'Advanced', monthly: 12, yearly: 120 },
    { id: 'pro', name: 'Pro', monthly: 15, yearly: 150 },
  ];

  const addOns: readonly AddOns[] = [
    {
      id: 'online-services',
      name: 'Online Service',
      description: 'Access to multiplayer games',
      monthly: 1,
      yearly: 10,
    },
    {
      id: 'larger-storage',
      name: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20,
    },
    {
      id: 'customizable-profile',
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthly: 2,
      yearly: 20,
    },
  ];

  const selectedPlanId = ref<Plans['id']>('arcade');
  const selectedAddOnId = ref<AddOns['id']>('online-services');
  const isYearly = ref(false);

  const selectedPlan = computed(() => plans.find((plan) => plan.id === selectedPlanId.value)!);
  const selectedAddOn = computed(() => addOns.find((addOn) => addOn.id === selectedAddOnId.value)!);

  const selectedPlanPrice = computed(() =>
    isYearly.value ? selectedPlan.value.yearly : selectedPlan.value.monthly,
  );

  const selectedAddOnPrice = computed(() =>
    isYearly.value ? selectedAddOn.value.yearly : selectedAddOn.value.monthly,
  );

  const currentStep = reactive({ step: 1 });
  const firstStep = computed(() => currentStep.step === 1);

  const steps = [
    '/signup/personal-info',
    '/signup/select-plan',
    '/signup/pick-add-ons',
    '/signup/summary',
  ];

  function validateStep1() {
    let valid = true;

    if (!formData.name) {
      formData.errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      formData.errors.email = 'Email is required';
      valid = false;
    }

    if (!formData.phone) {
      formData.errors.phone = 'Phone number is required';
      valid = false;
    }

    return valid;
  }

  function clearError(field: keyof typeof formData.errors) {
    formData.errors[field] = '';
  }

  function nextStep() {
    if (currentStep.step === 1 && !validateStep1()) {
      return;
    }

    if (currentStep.step < steps.length) {
      currentStep.step++;
    }

    return steps[currentStep.step - 1];
  }

  function prevStep() {
    if (currentStep.step > 1) currentStep.step--;
    return steps[currentStep.step - 1];
  }

  return {
    formData,
    currentStep,
    steps,
    nextStep,
    prevStep,
    firstStep,
    clearError,
    selectedPlan,
    selectedAddOn,
    selectedPlanPrice,
    selectedAddOnPrice,
    isYearly,
    selectedPlanId,
    selectedAddOnId,
    validateStep1,
  };
});
