<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavigationBottom from '@/components/NavigationBottom.vue';
import ButtonNavigation from '@/components/ButtonNavigation.vue';
import { useStepValidation } from '@/stores/stepValidation';
import ConfirmationModal from '@/components/ConfirmationModal.vue';
import { useFormStore } from '@/stores/form';

const stepValidationStore = useStepValidation();
const formStore = useFormStore();

const closeModal = () => {
  stepValidationStore.openModal = false;
  stepValidationStore.goToStep(1);
  formStore.resetForm();
};
</script>

<template>
  <div class="container relative z-10">
    <RouterView />
  </div>

  <NavigationBottom :showLeftButton="!stepValidationStore.firstStep">
    <template #leftButton>
      <ButtonNavigation @click="stepValidationStore.prevStep()"> Previous Step </ButtonNavigation>
    </template>

    <template #rightButton>
      <ButtonNavigation @click="stepValidationStore.nextStep()">{{
        stepValidationStore.lastStep ? 'Confirm' : 'Next Step'
      }}</ButtonNavigation>
    </template>
  </NavigationBottom>

  <ConfirmationModal
    :isOpen="stepValidationStore.openModal"
    :formName="formStore.formData.name"
    @close="closeModal"
  />
</template>
