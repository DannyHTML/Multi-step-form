const config = {
  '*.{ts,vue}': ['eslint --fix', 'prettier --write', 'vue-tsc --noEmit'],
}

export default config
