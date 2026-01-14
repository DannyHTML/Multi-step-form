<template>
  <SummaryLayout
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
    :PlanName="planName"
    :subLength="subLength"
    :price="formStore.selectedPlan.monthly"
    :subLengthShort="formStore.isYearly ? '/yr' : '/mo'"
    @click="stepValidationStore.goToStep(2)"
  />
</template>

<script setup lang="ts">
import SummaryLayout from '@/components/SummaryLayout.vue';
import { useFormStore } from '@/stores/form';
import { useStepValidation } from '@/stores/stepValidation';

const formStore = useFormStore();
const stepValidationStore = useStepValidation();

const planName = formStore.selectedPlan.name;
const subLength = formStore.isYearly ? '(yearly)' : '(monthly)';

console.log('selected plan', formStore.selectedPlan);
console.log('selected Add-Ons', formStore.selectedAddOns);

console.log(formStore.selectedAddOns.map((addOn) => addOn.name));
</script>
