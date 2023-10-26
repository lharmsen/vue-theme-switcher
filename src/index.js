// src/index.js
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const install = (Vue) => {
  Vue.component('ThemeSwitcher', ThemeSwitcher)
}

export default { install }
