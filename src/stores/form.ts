// stores/form.ts
import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

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

  const currentStep = reactive({ step: 1 });
  const firstStep = computed(() => currentStep.step === 1);

  const steps = [
    '/signup/personal-info',
    '/signup/select-plan',
    '/signup/add-ons',
    '/signup/summary',
  ];

  function validateStep1() {
    let valid = true;

    if (!formData.name.trim()) {
      formData.errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      formData.errors.email = 'Email is required';
      valid = false;
    }

    if (!formData.phone.trim()) {
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

  return { formData, currentStep, steps, nextStep, prevStep, firstStep, clearError };
});
