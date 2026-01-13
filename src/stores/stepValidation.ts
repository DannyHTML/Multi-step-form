import { defineStore } from 'pinia';
import { useFormStore } from './form';
import { computed, reactive } from 'vue';

export const useStepValidation = defineStore(
  'stepValidation',
  () => {
    const formStore = useFormStore();

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

      if (!formStore.formData.name) {
        formStore.formData.errors.name = 'Name is required';
        valid = false;
      }

      if (!formStore.formData.email) {
        formStore.formData.errors.email = 'Email is required';
        valid = false;
      }

      if (!formStore.formData.phone) {
        formStore.formData.errors.phone = 'Phone number is required';
        valid = false;
      }

      return valid;
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
      currentStep,
      firstStep,
      validateStep1,
      nextStep,
      prevStep,
    };
  },
  { persist: true },
);
