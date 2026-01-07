import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useFormStore = defineStore('form', () => {
  const formData = reactive({
    name: '',
    email: '',
    phone: '',
  });

  const validateForm = () => {
    return formData.name !== '' && formData.email !== '' && formData.phone !== '';
  };

  const nextStep = () => {
    if (!validateForm()) {
      return console.log('Please fill in all required fields.');
    }
    console.log('Proceeding to the next step with data:', formData);
  };

  return { formData, nextStep };
});
