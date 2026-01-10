import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import NavigationBottom from '../NavigationBottom.vue';
import ButtonNavigation from '../ButtonNavigation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

describe('App', () => {
  it('renders the app root', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia(), router],
      },
    });

    await router.isReady();

    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
    expect(wrapper.findComponent(NavigationBottom).exists()).toBe(true);
    expect(wrapper.findComponent(ButtonNavigation).exists()).toBe(true);
  });
});
