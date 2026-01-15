<template>
  <SummaryLayout
    title="Finishing up"
    description="Double-check everything looks OK before confirming."
    :PlanName="planName"
    :subLength="subLength"
    :price="pricePlan"
    :subLengthShort="formStore.isYearly ? '/yr' : '/mo'"
    @click="stepValidationStore.goToStep(2)"
    :addOns="formStore.summaryAddOns"
    :totalTitle="formStore.isYearly ? 'per year' : 'per month'"
    :isYearly="formStore.isYearly"
    :totalPrice="totalPrice"
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
const pricePlan = formStore.isYearly
  ? formStore.selectedPlan.yearly
  : formStore.selectedPlan.monthly;
const totalPrice = formStore.selectedAddOnsPrice + formStore.selectedPlanPrice;
</script>
