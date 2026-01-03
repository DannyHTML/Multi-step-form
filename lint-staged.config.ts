const config = {
  '*.{ts,vue,js}': ['eslint --fix', 'prettier --write', 'vue-tsc --noEmit'],
}

export default config
