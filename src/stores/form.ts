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
    { id: 'online-services', name: 'Online Service', description: 'Access to multiplayer games', monthly: 1, yearly: 10 },
    { id: 'larger-storage', name: 'Larger Storage', description: 'Extra 1TB of cloud save', monthly: 2, yearly: 20 },
    { id: 'customizable-profile', name: 'Customizable Profile', description: 'Custom theme on your profile', monthly: 2, yearly: 20 },
  ];

  const selectedPlanId = ref<Plans['id']>('arcade');
  const selectedAddOnIds = ref<AddOns['id'][]>([]);
  const isYearly = ref(false);

  const selectedPlan = computed(() => plans.find(p => p.id === selectedPlanId.value) ?? plans[0]!);
  const selectedAddOns = computed(() => addOns.filter(a => selectedAddOnIds.value.includes(a.id)));

  const selectedPlanPrice = computed(() => isYearly.value ? selectedPlan.value.yearly : selectedPlan.value.monthly);
  const selectedAddOnsPrice = computed(() =>
    selectedAddOns.value.reduce((total, a) => total + (isYearly.value ? a.yearly : a.monthly), 0)
  );

  const summaryAddOns = computed(() =>
    selectedAddOns.value.map(a => ({ name: a.name, price: isYearly.value ? a.yearly : a.monthly, id: a.id }))
  );

  function clearError(field: keyof typeof formData.errors) {
    formData.errors[field] = '';
  }

  function resetForm() {
    formData.name = '';
    formData.email = '';
    formData.phone = '';
    formData.errors.name = '';
    formData.errors.email = '';
    formData.errors.phone = '';
    selectedPlanId.value = 'arcade';
    selectedAddOnIds.value = [];
    isYearly.value = false;
  }

  // ✅ Assign persistence inside the store instance
  const storeInstance = {
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
    summaryAddOns,
    resetForm,
  };

  // Assign $persist to the instance — TS-safe
  if (!(storeInstance as any).$persist) {
    (storeInstance as any).$persist = {
      enabled: true,
      strategies: [
        {
          key: 'form',
          storage: localStorage,
          paths: ['formData.name','formData.email','formData.phone','selectedPlanId','selectedAddOnIds','isYearly'],
        },
      ],
    };
  }

  return storeInstance;
});
