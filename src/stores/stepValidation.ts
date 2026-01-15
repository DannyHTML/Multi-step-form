import { defineStore } from 'pinia';
import { useFormStore } from './form';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';

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
    const openModal = ref(false);

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
      const nextRoute = steps[currentStep.value]; // already +1 indexed

      if (!nextRoute) return (openModal.value = true);
      router.push(nextRoute);
    }

    function prevStep() {
      const previousRoute = steps[currentStep.value - 2];

      if (!previousRoute) return console.error('No previous step available.');
      router.push(previousRoute);
    }

    function goToStep(step: number) {
      const nextRoute = steps[step - 1];

      if (!nextRoute) return console.error('Try to go to a valid step.');
      router.push(nextRoute);
    }

    return {
      currentStep,
      firstStep,
      lastStep,
      steps,
      validateStep1,
      nextStep,
      prevStep,
      goToStep,
      openModal,
    };
  }
);
