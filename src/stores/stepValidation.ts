import { defineStore } from 'pinia';
import { useFormStore } from './form';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export const useStepValidation = defineStore(
  'stepValidation',
  () => {
    const formStore = useFormStore();
    const route = useRoute();

    const steps = [
      '/signup/personal-info',
      '/signup/select-plan',
      '/signup/pick-add-ons',
      '/signup/summary',
    ];

    const currentStep = computed(() => {
      const index = steps.indexOf(route.path);
      return index === -1 ? 1 : index + 1;
    });

    const firstStep = computed(() => currentStep.value === 1);
    const lastStep = computed(() => currentStep.value === steps.length);

    console.log('Current Step:', currentStep.value);
    console.log('Route Path:', route.path);
    console.log(lastStep.value);

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
      if (lastStep.value) return null;
      return steps[currentStep.value]; // already +1 indexed
    }

    function prevStep() {
      if (firstStep.value) return null;
      return steps[currentStep.value - 2];
    }

    return {
      currentStep,
      firstStep,
      lastStep,
      steps,
      validateStep1,
      nextStep,
      prevStep,
    };
  },
  { persist: true },
);
