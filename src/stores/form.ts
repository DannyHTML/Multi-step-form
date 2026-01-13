// stores/form.ts
import { reactive, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Plans } from '@/types/plans';
import type { AddOns } from '@/types/addOns';

export const useFormStore = defineStore(
  'form',
  () => {
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
    const selectedAddOnIds = ref<AddOns['id'][]>([]);

    const isYearly = ref(false);

    const selectedPlan = computed(() => plans.find((plan) => plan.id === selectedPlanId.value)!);
    const selectedAddOns = computed(() =>
      addOns.filter((addOn) => selectedAddOnIds.value.includes(addOn.id)),
    );

    const selectedPlanPrice = computed(() =>
      isYearly.value ? selectedPlan.value.yearly : selectedPlan.value.monthly,
    );

    const selectedAddOnsPrice = computed(() =>
      selectedAddOns.value.reduce(
        (total, addOn) => total + (isYearly.value ? addOn.yearly : addOn.monthly),
        0,
      ),
    );

    function clearError(field: keyof typeof formData.errors) {
      formData.errors[field] = '';
    }

    return {
      formData,
      clearError,
      selectedPlan,
      selectedAddOns,
      selectedPlanPrice,
      selectedAddOnsPrice,
      isYearly,
      selectedPlanId,
      selectedAddOnIds,
      plans,
      addOns,
    };
  },
  {
    persist: true,
  },
);
